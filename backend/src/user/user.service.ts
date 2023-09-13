import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './dto/user.dto';

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
		return { id: user.id, username: user.username, twoFactorAuthActive: user.twoFactorAuthActive};
	}

	async updateUser(user: UserDTO) {
		console.log(user);
		console.log(user.twoFactorAuthActive);
		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				username: user.username,
				twoFactorAuthActive: user.twoFactorAuthActive,
			}
		})
	}
}
