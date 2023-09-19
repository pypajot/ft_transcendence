import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
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
		if (user.twoFactorAuthActive)
			return ;
		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				username: user.username,
				twoFactorAuthActive: user.twoFactorAuthActive,
			}
		});
		if (!user.twoFactorAuthActive) {
			await this.prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					twoFactorAuthSecret: null,
				}
			});
		}
	}

	async addFriend(friendName: string, userId: number) {
		const friend = await this.prisma.user.findUnique({
			where: {
				username: friendName,
			},
		});
		if (!friend)
			throw new ForbiddenException("Friend request already sent");
		if (friend.friendsRequest.includes(userId))
			throw new ForbiddenException("Friend request already sent");
		const user = await this.prisma.user.findUnique({
			where: {
				id: userId,
			},
		});
		if (user && user.friendsRequest.includes(friend.id))
			throw new ForbiddenException("Friend request already sent");
		friend.friendsRequest.push(userId);
	}

	async respondFriendRequest(friendId: number, userId: number, accept: boolean) {
		const friend = await this.prisma.user.findUnique({
			where: {
				id: friendId,
			},
		});
		if (!friend)
			throw new Error("User not found");
		const user = await this.prisma.user.findUnique({
			where: {
				id: userId,
			},
		});
		if (!user)
			throw new Error("User not found");
		if (!user.friendsRequest.includes(friend.id))
			throw new Error("No friend request found");
		user.friendsRequest.splice(user.friendsRequest.indexOf(friend.id), 1);
		if (!accept)
			return ;
		user.friends.push(friend.id);
		friend.friends.push(userId);
	}

	async getFriendRequest(userId: number) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: userId,
			},
		});
		if (!user)
			throw new ForbiddenException("User not found");
		const friendRequest = [];
		for (const friendId of user.friendsRequest) {
			const friend = await this.prisma.user.findUnique({
				where: {
					id: friendId,
				},
			});
			friendRequest.push({id: friend.id, username: friend.username});
		}
		return friendRequest;
	}
}
