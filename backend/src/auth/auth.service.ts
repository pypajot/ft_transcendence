import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon2 from 'argon2';
import { Prisma } from "@prisma/client";
import {JwtService} from '@nestjs/jwt'

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

	async validateUser(dto: AuthDto) {
		const user = await this.prisma.users.findUnique({
			where: {
				username: dto.username,
			}
		})

		if (!user)
			throw (new ForbiddenException('Invalid username'));

		const pwMatch = await argon2.verify(user.hash, dto.password);

		if (!pwMatch)
			throw (new ForbiddenException('Invalid password'));
		
		return user;
	};


	async login(user: any) {
		const payload = { sub: user.id, username: user.username };
		return {
			access_token: await this.jwt.signAsync(payload)
		};
	}
}
