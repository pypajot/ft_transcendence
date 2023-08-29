import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon2 from 'argon2';
import { Prisma } from "@prisma/client";
import {JwtService} from '@nestjs/jwt'
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
	) {}

	async signup(dto: AuthDto) {
		console.log(dto);
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

	async login(dto: AuthDto, res: any) : Promise<any> {
		const user = await this.prisma.user.findUnique({
			where: {
				username: dto.username,
			}
		})
		res.cookie('refresh_token', await this.signRefreshToken(user.id), {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/auth/refresh',
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

	async signRefreshToken(id: number, token_family? : string) : Promise<string> {
		if (!token_family)
			token_family = uuidv4();
		const payload = {
			sub: id,
			token_family: token_family,
		};
		const token = await this.jwt.signAsync(
			payload, {
				expiresIn: '7d',
				secret: process.env.REFRESH_SECRET,
			});
		const hash = await argon2.hash(token);
		await this.prisma.user.update({
			where: {
				id: id
			},
			data: {
				tokens: {
					 create: {
						family: token_family,
						refreshToken: hash,
					}
				}
			}

		})


		return token;
	}

	async refresh(refresh_token: any) {
		console.log(refresh_token)
		// const payload = await this.jwt.verifyAsync(refresh_token, {
		// 	secret: process.env.REFRESH_SECRET,
		// });

		// const token = await this.prisma.userToken.findUnique({
		// 	where: {
		// 		UserId: payload.sub,
		// 		family: payload.token_family,
		// 	}
		// });

		// if (!token)
		// 	throw new ForbiddenException('Invalid refresh token');

		// const tokenMatch = await argon2.verify(token.refreshToken, refresh_token);

		// if (!tokenMatch)
		// {
		// 	await this.prisma.userToken.delete({
		// 		where: {			
		// 			UserId: payload.sub,
		// 			family: payload.token_family,
		// 		}
		// 	});
		// 	throw new ForbiddenException('Invalid refresh token');
		// }

		// return this.signAccessToken(payload.sub, payload.token_family);
	}
}
