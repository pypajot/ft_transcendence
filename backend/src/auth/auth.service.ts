import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async signup(dto: AuthDto) {
		console.log(dto);
		const user =  await this.prisma.user.create({
			data: {
				username: dto.username,
				password: dto.password,
			},
		});
		return user;
	}

	login() {
		return ('login');
	}
}