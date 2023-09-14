import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto, CodeDto } from "./dto";
import * as argon2 from 'argon2';
import { Prisma } from "@prisma/client";
import {JwtService} from '@nestjs/jwt'
import { v4 as uuidv4 } from "uuid";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { authenticator } from "otplib";
import { toDataURL } from "qrcode";

type RefreshPayloadType = {
	sub: number;
	username: string;
	token_family: string;
};

type JwtPaylodType = {
	sub: number;
	username: string
}


const RefreshTokenParams = {
	httpOnly: true,
	sameSite: 'Lax',
	secure: false,
	path: '/',
	maxAge: 60 * 60 * 1000,
}

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private http: HttpService,
	) {}



	async signup(dto: AuthDto, res: any) {
		const hash = await argon2.hash(dto.password);
		try {
			const user =  await this.prisma.user.create({
				data: {
					username: dto.username,
					hash: hash,
				},
				select: {
					id: true,
					username: true,
				}
			});
			res.cookie('refresh_token', await this.signRefreshToken(user.id, user.username), RefreshTokenParams);
			return { access_token: await this.signAccessToken(user.id, user.username) };
		}
		catch (err) {
			if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
				throw new ForbiddenException('Credentials taken')
			}
			throw err;
		}
		
	}

	async intralogin(res: any, code: string) {
		const url = "https://api.intra.42.fr/oauth/token";
		const parameters = { 
			grant_type: "authorization_code",
			client_id: process.env.INTRA_USER,
			client_secret: process.env.INTRA_SECRET,
			code: code,
			redirect_uri: "http://localhost:5173/intralogin"
		}
		const response = await firstValueFrom(this.http.post(url, null, { params: parameters}))
		const user = await this.createIntraUser(response.data.access_token);
		if (!user.twoFactorAuthActive)
			res.cookie('refresh_token', await this.signRefreshToken(user.id, user.username), RefreshTokenParams);
		return {
			access_token: await this.signAccessToken(user.id, user.username),
			user2fa: user.twoFactorAuthActive
		};
	}

	async createIntraUser(access_token: string)
	{
		const response = await firstValueFrom(this.http.get("https://api.intra.42.fr/v2/me", {
			headers: { "Authorization" : `Bearer ${access_token}`}
		}));
		const intraUser = response.data;
		if (!(await this.prisma.user.findUnique({ where: { intralogin: intraUser.login }}))) {
			await this.prisma.user.create({
				data: {
					username: await this.createUniqueUsername(intraUser.login),
					intralogin: intraUser.login,
				}
			})
		}
		return this.prisma.user.findUnique({ where: { intralogin: intraUser.login }});
	}

	async createUniqueUsername(login: string) {
		var newName = login;
		const alphanum = "ABDEFHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		while (await this.prisma.user.findUnique({ where: { username: newName }}))
			newName += alphanum[Math.floor(Math.random() * 62)];
		return newName;
	}

	async login(dto: AuthDto, res: any) : Promise<any> {
		const user = await this.prisma.user.findUnique({
			where: {
				username: dto.username,
			}
		})
		if (!user.twoFactorAuthActive)
			res.cookie('refresh_token', await this.signRefreshToken(user.id, user.username), RefreshTokenParams);
		return {
			access_token: await this.signAccessToken(user.id, user.username),
			user2fa: user.twoFactorAuthActive
		}
	};


	async validateUser(username: string, password: string)
	{
		const user = await this.prisma.user.findUnique({
			where: {
				username: username,
			}
		})

		if (!user)
			return null;
		const pwMatch = await argon2.verify(user.hash, password);
		if (!pwMatch)
			return null;
		
		return user;
	}

	async signAccessToken(id: number, username: string, time?: string) : Promise<any> {
		if (!time)
			time = "120s";
		const payload = {
			sub: id,
			username: username
		};
		const token = await this.jwt.signAsync(
			payload, {
				expiresIn: time,
				secret: process.env.JWT_SECRET,
			}
		);
		return token
	}

	async addTokenToDb(token: any, id: number, token_family : string) {
		const hash = await argon2.hash(token);
		await this.prisma.userToken.create({
			data: {
				family: token_family,
				refreshToken: hash,
				UserId: id,		
			}
		})
	}

	async removeTokenFromDb (id: number, token_family: string) {
		await this.prisma.userToken.delete({
			where: {
				family: token_family,
			},
		})
	}

	async signRefreshToken(id: number, username: string, token_family? : string) : Promise<string> {
		if (!token_family)
			token_family = uuidv4();
		const payload = {
			sub: id,
			username: username,
			token_family: token_family,
		};
		const token = await this.jwt.signAsync(
			payload, {
				expiresIn: '600s',
				secret: process.env.REFRESH_SECRET,
			}
		);
		this.addTokenToDb(token, id, token_family);
		return token;
	}

	async verifyFamilyInDb(payload: any): Promise<any | null> {
		const token = await this.prisma.userToken.findUnique({
			where: {
				UserId: payload.sub,
				family: payload.token_family,
			}
		});
		if (!token)
			return null
		return token;
	}

	async isReuse(token: any, refresh_token: string): Promise<boolean> {
		const tokenMatch = await argon2.verify(token.refreshToken, refresh_token);
		return tokenMatch;
	}

	async deleteTokenFromDb(payload: any) {
		await this.prisma.userToken.delete({
			where: {			
				UserId: payload.sub,
				family: payload.token_family,
			}
		});
	}


	async refresh(res: any, refresh_token?: any) {
		if (!refresh_token)
			throw new UnauthorizedException('No refresh token');
		const payload = await  this.jwt.verifyAsync(refresh_token, {
			secret: process.env.REFRESH_SECRET,
		});
		if (!payload) {
			const payloadToDelete = this.jwt.decode(refresh_token);
			this.deleteTokenFromDb(payloadToDelete);
			await res.clearCookie('refresh_token', RefreshTokenParams);
			throw new UnauthorizedException('Invalid refresh token');
		}
		const dbToken = await this.verifyFamilyInDb(payload);
		if (!dbToken)
			throw new UnauthorizedException('Invalid family');
		const inDb = await this.isReuse(dbToken, refresh_token);
		if (!inDb)
		{
			this.deleteTokenFromDb(payload);
			throw new UnauthorizedException('Reused token');
		}
		await this.prisma.userToken.delete({
			where: {
				UserId: payload.sub,
				family: payload.token_family,
			}
		})
		const newtoken = await this.signRefreshToken(payload.sub, payload.username, payload.token_family);
		res.cookie('refresh_token', newtoken, RefreshTokenParams);
		return this.signAccessToken(payload.sub, payload.username);
	}

	async logout(res: any, refresh_token?: any) {
		if (!refresh_token)
			throw new UnauthorizedException('No refresh token');
		const payload = await this.jwt.verifyAsync(refresh_token, {
			secret: process.env.REFRESH_SECRET,
		});

		const token = await this.prisma.userToken.findUnique({
			where: {
				UserId: payload.sub,
				family: payload.token_family,
			}
		});
		if (!token)
			throw new ForbiddenException('Invalid refresh token');
		await this.prisma.userToken.delete({
			where: {			
				UserId: payload.sub,
				family: payload.token_family,
			}
		})
		await res.clearCookie('refresh_token', RefreshTokenParams);
		return ("Logout successful");
	}

	async activate2fa(req: any) {
		const payload = this.jwt.decode(req.headers.authorization.split(' ')[1]) as JwtPaylodType
		const user = await this.prisma.user.findUnique({
			where: {
				id: payload.sub,
			}
		});
		const secret = authenticator.generateSecret();
		await this.prisma.user.update({
			where: {
				id: payload.sub,
			},
			data: {
				twoFactorAuthSecret: secret,
			}
		});
		const otp = authenticator.keyuri(user.username, process.env.TWOFACTOR_APP_NAME, secret);
		const imagePath = await toDataURL(otp);
		return {path: imagePath};
	}

	async confirm2fa(req: any) {
		const payload = this.jwt.decode(req.headers.authorization.split(' ')[1]) as JwtPaylodType
		const user = await this.prisma.user.findUnique({
			where: {
				id: payload.sub,
			}
		});
		const isValid = authenticator.verify({
			token: req.body.code,
			secret: user.twoFactorAuthSecret,
		});
		if (!isValid)
			throw new ForbiddenException('Invalid code');
		await this.prisma.user.update({
			where: {
				id: payload.sub,
			},
			data: {
				twoFactorAuthActive: true,
			}
		});
		return ("2FA activated");
	}
	
	async login2fa(res: any, req: any) {
		const payload = this.jwt.decode(req.headers.authorization.split(' ')[1]) as JwtPaylodType
		const user = await this.prisma.user.findUnique({
			where: {
				id: payload.sub,
			}
		});
		const isValid = authenticator.verify({
			token: req.body.code,
			secret: user.twoFactorAuthSecret,
		});
		if (!isValid)
			throw new ForbiddenException('Invalid code');
		res.cookie('refresh_token', await this.signRefreshToken(user.id, user.username), RefreshTokenParams);
		return { access_token: await this.signAccessToken(user.id, user.username) }
	}
}
