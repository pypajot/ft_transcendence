import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getUser(params: any) {
		console.log(params.id);
		const user = await this.prisma.user.findUnique({
			where: {
				id: Number(params.id),
			},
		});
		return (user);
	}
	
	async getMe(id: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: Number(id),
			},
		});
		delete user.hash;
		return user;
	}
}
