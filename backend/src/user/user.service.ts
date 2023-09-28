import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './dto/user.dto';
import { WsException } from '@nestjs/websockets';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getUser(params: any) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: Number(params.id),
            },
        });
        return { ...user, hash: undefined, twoFactorAuthSecret: undefined };
    }

    async getUsersbyId(ids: number[]) {
        const users = await this.prisma.user.findMany({
            where: {
                id: { in: ids },
            },
            select: {
                id: true,
                avatar: true,
                username: true,
                status: true,
            },
        });
        return users;
    }

    async getMe(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        const friends = await this.getUsersbyId(user.friends);
        const friendsRequest = await this.getUsersbyId(user.friendsRequest);
        return {
            ...user,
            hash: undefined,
            twoFactorAuthSecret: undefined,
            friends: friends,
            friendsRequest: friendsRequest,
        };
    }

    async updateUser(user: UserDTO) {
        if (user.twoFactorAuthActive) return;
        await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                username: user.username,
                twoFactorAuthActive: user.twoFactorAuthActive,
            },
        });
        if (!user.twoFactorAuthActive) {
            await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    twoFactorAuthSecret: null,
                },
            });
        }
    }

    async changeUsername(socketId: string, new_name: string, server: any) {
        if (new_name === '')
            throw new WsException('Name cannot be empty');
        let user = await this.prisma.user.findUnique({
            where: { username: new_name },
        });
        if (user) throw new WsException('Name already in use');
        user = await this.prisma.user.update({
            where: { socketId: socketId },
            data: {
                username: new_name,
            },
        });
		await this.updateUserAndFriends(user, server);
    }

    async changeAvatar(socketId: string, file: string, server: any) {
        const user = await this.prisma.user.update({
            where: { socketId: socketId },
            data: {
                avatar: file,
            },
        });
        if (!user) throw new ForbiddenException('No such user');
		await this.updateUserAndFriends(user, server);
    }

    async addFriend(
        content: { friendName: string; userId: number },
        server: any
    ) {
        const friend = await this.prisma.user.findUnique({
            where: {
                username: content.friendName,
            },
        });
        if (!friend)
            throw new WsException({
                func: 'addFriend',
                msg: 'User does not exist',
            });
        if (friend.friendsRequest.includes(content.userId))
            throw new WsException({
                func: 'addFriend',
                msg: 'Friend request already sent',
            });
        if (friend.friends.includes(content.userId))
            throw new WsException({
                func: 'addFriend',
                msg: 'Already friends',
            });
        const user = await this.prisma.user.findUnique({
            where: {
                id: content.userId,
            },
        });
        if (user && user.friendsRequest.includes(friend.id))
            throw new WsException({
                func: 'addFriend',
                msg: 'Friend request already sent',
            });
        // friend.friendsRequest.push(content.userId);
        const newFriend = await this.prisma.user.update({
            where: { id: friend.id },
            data: {
                friendsRequest: {
                    push: content.userId,
                },
            },
        });
        server
            .to(newFriend.socketId)
            .emit('updateUser', await this.getMe(newFriend.id));
    }

    async respondFriendRequest(
        content: { friendId: number; userId: number; accept: boolean },
        server: any
    ) {
        const friend = await this.prisma.user.findUnique({
            where: {
                id: content.friendId,
            },
        });
        if (!friend) throw new BadRequestException('User not found');
        const user = await this.prisma.user.findUnique({
            where: {
                id: content.userId,
            },
        });
        if (!user) throw new BadRequestException('User not found');
        if (!user.friendsRequest.includes(friend.id))
            throw new BadRequestException('No friend request found');
        user.friendsRequest.splice(user.friendsRequest.indexOf(friend.id), 1);
        await this.prisma.user.update({
            where: { id: content.userId },
            data: {
                friendsRequest: user.friendsRequest,
            },
        });
        if (!content.accept) {
            server
                .to(user.socketId)
                .emit('updateUser', await this.getMe(user.id));
            return;
        }
        const newUser = await this.prisma.user.update({
            where: { id: content.userId },
            data: {
                friends: { push: friend.id },
            },
        });
        const newFriend = await this.prisma.user.update({
            where: { id: friend.id },
            data: {
                friends: { push: content.userId },
            },
        });
        console.log();
        server
            .to(newFriend.socketId)
            .emit('updateUser', await this.getMe(newFriend.id));
        server
            .to(newUser.socketId)
            .emit('updateUser', await this.getMe(newUser.id));
    }

    async getFriendRequest(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) throw new ForbiddenException('User not found');
        const friendRequest = [];
        for (const friendId of user.friendsRequest) {
            const friend = await this.prisma.user.findUnique({
                where: {
                    id: friendId,
                },
            });
            friendRequest.push({ id: friend.id, username: friend.username });
        }
        return friendRequest;
    }

    async getFriendList(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id: id },
        });
        const list = await this.prisma.user.findMany({
            where: {
                id: { in: user.friends },
            },
        });
        return list;
    }

    async blockUser(content: any, server: any) {
        const target = await this.prisma.user.findUnique({
            where: { username: content.targetName },
        });
        if (!target)
            throw new WsException({ func: 'blockUser', msg: 'No such user' });
        const user = await this.prisma.user.findUnique({
            where: { id: content.userId },
        });
        if (user.blocked.includes(target.id))
            throw new WsException({
                func: 'blockUser',
                msg: 'User already blocked',
            });
        const newUser = await this.prisma.user.update({
            where: { id: content.userId },
            data: {
                blocked: { push: target.id },
            },
        });
        server
            .to(newUser.socketId)
            .emit('updateUser', await this.getMe(newUser.id));
    }

    async unblockUser(content: any, server: any) {
        const target = await this.prisma.user.findUnique({
            where: { username: content.targetName },
        });
        if (!target)
            throw new WsException({ func: 'unblockUser', msg: 'No such user' });
        const user = await this.prisma.user.findUnique({
            where: { id: content.userId },
        });
        if (!user.blocked.includes(target.id))
            throw new WsException({
                func: 'unblockUser',
                msg: 'User is not blocked',
            });
        user.blocked.splice(user.blocked.indexOf(target.id), 1);
        const newUser = await this.prisma.user.update({
            where: { id: content.userId },
            data: {
                blocked: user.blocked,
            },
        });
        server
            .to(newUser.socketId)
            .emit('updateUser', await this.getMe(newUser.id));
    }

	async updateUserAndFriends(user: any, server: any) {
		server
			.to(user.socketId)
			.emit('updateUser', await this.getMe(user.id));
        for (const friendId of user.friends) {
            const friend = await this.prisma.user.findUnique({
                where: { id: friendId },
            });
            server
                .to(friend.socketId)
                .emit('updateUser', await this.getMe(friend.id));
        }
	}

    async changeStatus(socketId: string, status: string, server: any) {
        const user = await this.prisma.user.update({
            where: { socketId: socketId },
            data: {
                status: status,
            },
        });
        await this.updateUserAndFriends(user, server);
    }
}
