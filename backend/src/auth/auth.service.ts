import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async signup(dto: AuthDto) {
		console.log(dto);
		const hash = await argon2.hash(dto.password);
		const user =  await this.prisma.user.create({
			data: {
				username: dto.username,
				hash: hash,
			},
		});
		return user;
	}

	login() {
		return ('login');
	}
}