import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './dto/user.dto';
import { WsException } from '@nestjs/websockets';
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
	cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
	api_key: process.env.CLOUDINARY_API_KEY, 
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true
  });

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
		return { id: user.id, username: user.username, avatar: user.avatar, twoFactorAuthActive: user.twoFactorAuthActive};
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

	async changeUsername(id: number, newName: string) {
		let user = await this.prisma.user.findUnique({
			where : {username: newName}
		})
		if (user)
			throw new ForbiddenException('Name already in use');
		user = await this.prisma.user.update({
			where: {id: id},
			data: {
				username: newName
			}
		})
		return { username: user.username };
	}

	async changeAvatar(id: number, file: string) {
		const user = await this.prisma.user.findUnique({
			where : {id: id}
		})
		if (!user)
			throw new ForbiddenException('No such user');
		try {
			const imageResponse = await cloudinary.uploader.upload(file);
			await this.prisma.user.update({
				where : {id: id},
				data: {
					avatar: imageResponse.secure_url
				}
			})
			return { avatar: imageResponse.secure_url }
		} catch (err) {
			console.log(err);
		}
		throw new ForbiddenException('invalid file')
	}

	async addFriend(content: {friendName: string, userId: number}, server: any) {
		console.log(content.userId);
		const friend = await this.prisma.user.findUnique({
			where: {
				username: content.friendName,
			},
		});
		if (!friend)
			throw new WsException("User does not exist");
		if (friend.friendsRequest.includes(content.userId))
			throw new WsException("Friend request already sent");
		if (friend.friends.includes(content.userId))
			throw new WsException("Already friends");
		const user = await this.prisma.user.findUnique({
			where: {
				id: content.userId,
			},
		});
		if (user && user.friendsRequest.includes(friend.id))
			throw new WsException("Friend request already sent");
		console.log("request ok");
		// friend.friendsRequest.push(content.userId);
		await this.prisma.user.update({
			where: { id: friend.id },
			data: {
				friendsRequest: {
					push: content.userId
				}
			}
		});
		console.log("friend socket id: ", friend.socketId);
		server.to(friend.socketId).emit("friendRequestFrom", user);
	}

	async respondFriendRequest(content: {friendId: number, userId: number, accept: boolean}, server: any) {
		const friend = await this.prisma.user.findUnique({
			where: {
				id: content.friendId,
			},
		});
		if (!friend)
			throw new BadRequestException("User not found");
		const user = await this.prisma.user.findUnique({
			where: {
				id: content.userId,
			},
		});
		if (!user)
			throw new BadRequestException("User not found");
		if (!user.friendsRequest.includes(friend.id))
			throw new BadRequestException("No friend request found");
		user.friendsRequest.splice(user.friendsRequest.indexOf(friend.id), 1);
		await this.prisma.user.update({
			where: { id: content.userId },
			data: {
				friendsRequest: user.friendsRequest
			}
		})
		if (!content.accept)
			return ;
		server.to(friend.socketId).emit("friendAdded", user);
		server.to(user.socketId).emit("friendAdded", friend);
		await this.prisma.user.update({
			where: { id: content.userId },
			data: {
				friends: { push: friend.id}
			}
		})
		await this.prisma.user.update({
			where: { id: friend.id },
			data: {
				friends: { push: content.userId}
			}
		})
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

	async getFriendList(id: number) {
		const user = await this.prisma.user.findUnique({
			where: { id: id },
		})
		const list = await this.prisma.user.findMany({
			where: {
				id: { in: user.friends }
			}
		})
		console.log(list);
		return list;
	}
	async blockUser(content: any, server: any) {
		const target = await this.prisma.user.findUnique({
			where: { username: content.targetName },
		});
		if (!target)
			throw new WsException("no such user");
		const user = await this.prisma.user.findUnique({
			where: { id: content.userId },
		});
		if (user.blocked.includes(target.id))
			throw new WsException("User already blocked");
		await this.prisma.user.update({
			where: { id: content.userId },
			data: {
				blocked: { push: target.id}
			}
		})
	}
}
