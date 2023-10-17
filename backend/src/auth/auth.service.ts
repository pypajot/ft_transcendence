import {
	BadRequestException,
    ForbiddenException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon2 from 'argon2';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { authenticator } from 'otplib';
import { toDataURL } from 'qrcode';
import { createCipheriv, createDecipheriv, scrypt } from 'crypto';
import { promisify } from 'util';

type JwtPaylodType = {
    sub: number;
    username: string;
    twofactor_on: boolean;
};

const iv = Buffer.alloc(16, 0);
const password = process.env.ENCRPYT_SECRET;
const salt = process.env.ENCRYPT_SALT;

const RefreshTokenParams = {
    httpOnly: true,
    sameSite: 'Lax',
    secure: false,
    path: '/',
    maxAge: 60 * 60 * 1000,
};

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private http: HttpService,
    ) {}

	public background = "";

    async signup(dto: AuthDto, res: any) {
		if (dto.username.indexOf(' ') !== -1)
			throw new BadRequestException('Username cannot contain spaces')
        const hash = await argon2.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    username: dto.username,
                    hash: hash,
                },
                select: {
                    id: true,
                    username: true,
                },
            });
            res.cookie(
                'refresh_token' + user.id.toString(),
                await this.signRefreshToken(user.id, user.username, false),
                RefreshTokenParams
            );
            return {
                access_token: await this.signAccessToken(
                    user.id,
                    user.username,
                    false
                ),
            };
        } catch (err) {
            if (
                err.code instanceof Prisma.PrismaClientKnownRequestError &&
                err.code === 'P2002'
            ) {
                throw new ForbiddenException('Credentials taken');
            }
            throw err;
        }
    }

	async setBackgroundAvatar(access_token: string) {
		let login = process.env.BACKGROUND;
		if (!login)
			login = "ppajot";
		console.log(login);
		const response = await firstValueFrom(
            this.http.get(`https://api.intra.42.fr/v2/users?filter[login]=${login}`, {
                headers: { Authorization: `Bearer ${access_token}` },
            })
        );
		if (response.status !== 200)
			throw new UnauthorizedException();
		await this.prisma.background.create({
			data: {
				picture: response.data[0].image.versions.large
			}
		});
	}

    async intralogin(res: any, code: string) {
        const url = 'https://api.intra.42.fr/oauth/token';
        const parameters = {
            grant_type: 'authorization_code',
            client_id: process.env.INTRA_USER,
            client_secret: process.env.INTRA_SECRET,
            code: code,
            redirect_uri: `http://localhost:3333/intralogin`,
        };
        let time = '300s';
        const response = await firstValueFrom(
            this.http.post(url, null, { params: parameters })
        );
		// try catch request
		console.log(response.status);
		if (response.status !== 200)
			throw new UnauthorizedException('Invalid code')
        const user = await this.createIntraUser(response.data.access_token);
        // if (user.status === "online")
        // 	throw new ForbiddenException("User is already connected");
        if (!user.twoFactorAuthActive) {
            res.cookie(
                'refresh_token' + user.id.toString(),
                await this.signRefreshToken(user.id, user.username, false),
                RefreshTokenParams
            );
            time = '30s';
        }
		// await this.setBackgroundAvatar(response.data.access_token);
        return {
            access_token: await this.signAccessToken(
                user.id,
                user.username,
                false,
                time
            ),
            user2fa: user.twoFactorAuthActive,
        };
    }

    async createIntraUser(access_token: string) {
        const response = await firstValueFrom(
            this.http.get('https://api.intra.42.fr/v2/me', {
                headers: { Authorization: `Bearer ${access_token}` },
            })
        );
		if (response.status !== 200)
			throw new UnauthorizedException('Invalid access token');
		this.setBackgroundAvatar(access_token);
        const intraUser = response.data;
		// await this.prisma.background.create({
		// 	data: {
		// 		picture: intraUser.image.versions.large
		// 	}
		// });
        if (
            !(await this.prisma.user.findUnique({
                where: { intralogin: intraUser.login },
            }))
        ) {
            await this.prisma.user.create({
                data: {
                    username: await this.createUniqueUsername(intraUser.login),
                    intralogin: intraUser.login,
                },
            });
        }
		const user = await this.prisma.user.findUnique({
            where: { intralogin: intraUser.login },
        });
		if (user.status !== "offline")
			throw new UnauthorizedException('User already connected')
        return user;
    }

    async createUniqueUsername(login: string) {
        let newName = login;
        const alphanum =
            'ABDEFHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        while (
            await this.prisma.user.findUnique({ where: { username: newName } })
        )
            newName += alphanum[Math.floor(Math.random() * 62)];
        return newName;
    }

    async login(dto: AuthDto, res: any): Promise<any> {
        const user = await this.prisma.user.findUnique({
            where: {
                username: dto.username,
            },
        });
		if (!user)
			throw new BadRequestException('User not found')
		if (user.status !== "offline")
			throw new UnauthorizedException('User already connected')
        let time = '300s';
        if (!user.twoFactorAuthActive) {
            res.cookie(
                'refresh_token' + user.id.toString(),
                await this.signRefreshToken(user.id, user.username, false),
                RefreshTokenParams
            );
            time = '30s';
        }
        return {
            access_token: await this.signAccessToken(
                user.id,
                user.username,
                false,
                time
            ),
            user2fa: user.twoFactorAuthActive,
        };
    }

    async validateUser(username: string, password: string) {
        console.log('received : ', username)
        const user = await this.prisma.user.findUnique({
            where: {
                username: username,
            },
        });
        if (!user) throw new UnauthorizedException('User does not exist');
        if (user?.intralogin) throw new UnauthorizedException('User is intralogin');
        const pwMatch = await argon2.verify(user.hash, password);
        console.log('pwMatch : ', pwMatch)
        if (!pwMatch) throw new UnauthorizedException('Invalid password');

        return user;
    }

    async signAccessToken(
        id: number,
        username: string,
        twofactor_on: boolean,
        time?: string
    ): Promise<any> {
        if (!time) time = '30s';
        const payload = {
            sub: id,
            username: username,
            twofactor_on: twofactor_on,
        };
        const token = await this.jwt.signAsync(payload, {
            expiresIn: time,
            secret: process.env.JWT_SECRET,
        });
        return token;
    }

    async addTokenToDb(token: any, id: number, token_family: string) {
        const hash = await argon2.hash(token);
        await this.prisma.userToken.create({
            data: {
                family: token_family,
                refreshToken: hash,
                UserId: id,
            },
        });
    }

    async removeTokenFromDb(id: number, token_family: string) {
        await this.prisma.userToken.delete({
            where: {
                family: token_family,
            },
        });
    }

    async signRefreshToken(
        id: number,
        username: string,
		twofactor_on: boolean,
        token_family?: string
    ): Promise<string> {
        if (!token_family) token_family = uuidv4();
        const payload = {
            sub: id,
            username: username,
			twofactor_on: twofactor_on,
            token_family: token_family,
        };
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '3600s',
            secret: process.env.REFRESH_SECRET,
        });
        await this.addTokenToDb(token, id, token_family);
        return token;
    }

    async verifyFamilyInDb(payload: any): Promise<any | null> {
        const token = await this.prisma.userToken.findUnique({
            where: {
                UserId: payload.sub,
                family: payload.token_family,
            },
        });
        if (!token) return null;
        return token;
    }

    async isReuse(token: any, refresh_token: string): Promise<boolean> {
        const tokenMatch = await argon2.verify(
            token.refreshToken,
            refresh_token
        );
        return tokenMatch;
    }

    async deleteTokenFromDb(payload: any) {
        await this.prisma.userToken.delete({
            where: {
                UserId: payload.sub,
                family: payload.token_family,
            },
        });
    }

    async refresh(res: any, refresh_token?: any) {
        if (!refresh_token) throw new UnauthorizedException('No refresh token');
        try {
            await this.jwt.verifyAsync(refresh_token, {
                secret: process.env.REFRESH_SECRET,
            });
        } catch (e) {
            const payloadToDelete = this.jwt.decode(refresh_token) as {[key: string] :any};
            await this.deleteTokenFromDb(payloadToDelete);
            await res.clearCookie('refresh_token' + payloadToDelete.sub.toString(), RefreshTokenParams);
            throw new UnauthorizedException('Invalid refresh token');
        }
        const payload = this.jwt.decode(refresh_token) as {
            [key: string]: any;
        };
        const dbToken = await this.verifyFamilyInDb(payload);
        if (!dbToken) throw new UnauthorizedException('Invalid family');
        const inDb = await this.isReuse(dbToken, refresh_token);
        if (!inDb) {
            await this.deleteTokenFromDb(payload);
            throw new UnauthorizedException('Reused token');
        }
        await this.prisma.userToken.delete({
            where: {
                UserId: payload.sub,
                family: payload.token_family,
            },
        });
        const newtoken = await this.signRefreshToken(
            payload.sub,
            payload.username,
            payload.token_family
        );
        res.cookie('refresh_token' + payload.sub.toString(), newtoken, RefreshTokenParams);
        return await this.signAccessToken(
            payload.sub,
            payload.username,
            payload.twofactor_on
        );
    }

    async logout(res: any, refresh_token?: any) {
        if (!refresh_token) throw new UnauthorizedException('No refresh token');
        const payload = await this.jwt.verifyAsync(refresh_token, {
            secret: process.env.REFRESH_SECRET,
        });
        const token = await this.prisma.userToken.findUnique({
            where: {
                family: payload.token_family,
            },
        });
        if (!token) throw new ForbiddenException('Invalid refresh token');
        await this.prisma.userToken.delete({
            where: {
                UserId: payload.sub,
                family: payload.token_family,
            },
        });
        await res.clearCookie('refresh_token' + payload.sub.toString(), RefreshTokenParams);
        return 'Logout successful';
    }

    async activate2fa(req: any) {
        const payload = this.jwt.decode(
            req.headers.authorization.split(' ')[1]
        ) as JwtPaylodType;
		console.log(" paylaod ",payload)
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.sub,
            },
        });
		console.log("user:", user)
        const secret = authenticator.generateSecret();
        const key = (await promisify(scrypt)(password, salt, 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, iv);
        const encryptedText = Buffer.concat([
            cipher.update(secret),
            cipher.final(),
        ]);
        await this.prisma.user.update({
            where: {
                id: payload.sub,
            },
            data: {
                twoFactorAuthSecret: encryptedText,
            },
        });
        const otp = authenticator.keyuri(
            user.username,
            process.env.TWOFACTOR_APP_NAME,
            secret
        );
		console.log("otp: ",otp);
        const imagePath = await toDataURL(otp);
		console.log("iamge: ", imagePath)
        return { path: imagePath };
    }

    async decrypt(buf: Buffer) {
        const key = (await promisify(scrypt)(password, salt, 32)) as Buffer;
        const decipher = createDecipheriv('aes-256-ctr', key, iv);
        const decryptedText = Buffer.concat([
            decipher.update(buf),
            decipher.final(),
        ]);
        return decryptedText.toString();
    }

    async confirm2fa(req: any, res: any) {
        const payload = this.jwt.decode(
            req.headers.authorization.split(' ')[1]
        ) as JwtPaylodType;
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.sub,
            },
        });
        const isValid = authenticator.verify({
            token: req.body.code,
            secret: await this.decrypt(user.twoFactorAuthSecret),
        });
        if (!isValid) throw new ForbiddenException('Invalid code');
        await this.prisma.user.update({
            where: {
                id: payload.sub,
            },
            data: {
                twoFactorAuthActive: true,
            },
        });
		res.cookie(
            'refresh_token' + user.id.toString(),
            await this.signRefreshToken(user.id, user.username, true),
            RefreshTokenParams
        );
        return {
            token: await this.signAccessToken(user.id, user.username, true),
        };
    }

    async login2fa(res: any, req: any) {
        const payload = this.jwt.decode(
            req.headers.authorization.split(' ')[1]
        ) as JwtPaylodType;
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.sub,
            },
        });
        const isValid = authenticator.verify({
            token: req.body.code,
            secret: await this.decrypt(user.twoFactorAuthSecret),
        });
        if (!isValid) throw new ForbiddenException('Invalid code');
        res.cookie(
            'refresh_token' + user.id.toString(),
            await this.signRefreshToken(user.id, user.username, true),
            RefreshTokenParams
        );
        return {
            access_token: await this.signAccessToken(
                user.id,
                user.username,
                true
            ),
        };
    }
}
