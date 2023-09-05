import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon2 from 'argon2';
import { Prisma } from "@prisma/client";
import {JwtService} from '@nestjs/jwt'
import { v4 as uuidv4 } from "uuid";
import { HttpService } from "@nestjs/axios";

type RefreshPayloadType = {
	sub: number;
	username: string;
	token_family: string;
};

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private http: HttpService,
	) {}

	async signup(dto: AuthDto) {
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
			return user;
		}
		catch (err) {
			if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
				throw new ForbiddenException('Credentials taken')
			}
			throw err;
		}
		
	}

	async intralogin(code: string) {
		const url = "https://api.intra.42.fr/oauth/token";
	}

	async login(dto: AuthDto, res: any) : Promise<any> {
		const user = await this.prisma.user.findUnique({
			where: {
				username: dto.username,
			}
		})
		res.cookie('refresh_token', await this.signRefreshToken(user.id, user.username), {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/',
			maxAge: 600 * 1000,
		});
		return await this.signAccessToken(user.id, user.username);
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

	async signAccessToken(id: number, username: string) : Promise<any> {
		const payload = {
			sub: id,
			username: username
		};
		const token = await this.jwt.signAsync(
			payload, {
				expiresIn: '60s',
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

	async deleteIfReuse(payload: any) {
		await this.prisma.userToken.delete({
			where: {			
				UserId: payload.sub,
				family: payload.token_family,
			}
		});
	}


	async refresh(res: any, refresh_token: any) {
		const payload = this.jwt.decode(refresh_token) as RefreshPayloadType;
		await this.prisma.userToken.delete({
			where: {
				UserId: payload.sub,
				family: payload.token_family,
			}
		})
		const newtoken = await this.signRefreshToken(payload.sub, payload.username, payload.token_family);
		res.cookie('refresh_token', newtoken, {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/',
			maxAge: 600 * 1000,
		});
		return this.signAccessToken(payload.sub, payload.username);
	}

	async logout(res: any, refresh_token: any) {
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
		res.clearCookie('refresh_token', {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/',
			maxAge: 600 * 1000,
		});
		return ("Logout successful");
	}
}
