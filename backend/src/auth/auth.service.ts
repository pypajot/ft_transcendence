import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon2 from 'argon2';
import { Prisma } from "@prisma/client";
import {JwtService} from '@nestjs/jwt'
import { access } from "fs";

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
			const user =  await this.prisma.users.create({
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

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto.username, dto.password);
		return this.signToken(user.id, user.username);
	};


	async validateUser(username: string, password: string)
	{
		const user = await this.prisma.users.findUnique({
			where: {
				username: username,
			}
		})

		if (!user)
			throw (new ForbiddenException('Invalid username'));

		const pwMatch = await argon2.verify(user.hash, password);

		if (!pwMatch)
			throw (new ForbiddenException('Invalid password'));

		return user;
	}

	async signToken(id: number, username: string) : Promise<any> {
		const payload = {
			sub: id,
			username: username
		};
		const token = await this.jwt.signAsync(
			payload, {
				expiresIn: '60s',
				secret: process.env.JWT_SECRET,
			});
		return { access_token : token }
	}
}
