import { BadRequestException, Injectable } from '@nestjs/common';
import { Conversation } from 'src/types/conversation.entity';
import { Message } from 'src/types/message.entity';
import { UtilsService } from './utills.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatControllerService {
    constructor(private readonly serviceUtils: UtilsService,
        private prisma: PrismaService) {}

    async getFriendsList(user_name: string) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    username: user_name,
                },
                include: {
                    channels: true,
                },
            });
            const friends: Conversation[] = [];
            if (user && user.friends) {
                for (let i = 0; i < user.friends.length; i++) {
                    const friend = await this.prisma.user.findUnique({
                        where: {
                            id: user.friends[i],
                        },
                    });
                    const elem: Conversation = {
                        channel: false,
                        user: true,
                        name: friend.username,
                    };
                    friends.push(elem);
                }
            }
            if (user) {
                for (let i = 0; i < user.channels.length; i++) {
                    const elem: Conversation = {
                        channel: true,
                        user: false,
                        name: user.channels[i].name,
                    };
                    friends.push(elem);
                }
            }
            return friends;
        } catch (error) {
            // console.log(error);
        }
    }

    async getLogsUserToUser(sender_name: string, receiver_name: string) {
        // try {
            const sender = await this.prisma.user.findUnique({
                where: {
                    username: sender_name,
                },
            });
            const receiver = await this.prisma.user.findUnique({
                where: {
                    username: receiver_name,
                },
            });
            const json_messages = await this.getMessages(sender, receiver);
            return json_messages;

    }

    async getChannelLogsToUser(channel_name: string, user_name: string) {
        // try {
            const channel = await this.prisma.channel.findUnique({
                where: {
                    name: channel_name,
                },
                include: {
                    messages: true,
                },
            });
            const user = await this.prisma.user.findUnique({
                where: {
                    username: user_name,
                },
            });
			if (!channel)
				throw new BadRequestException("Channel not found");
			if (!user)
				throw new BadRequestException("User not found");
            const res: Message[] = [];
            for (
                let i = 0;
                channel && channel.messages && i < channel.messages.length;
                i++
            ) {
                if (channel.messages[i].authorId != user.id) {
                    const msg: Message = {
                        ...channel.messages[i],
                        senderName: await this.serviceUtils.findUsernameFromId(
                            channel.messages[i].authorId
                        ),
                        sent: false,
                    };
                    res.push(msg);
                }
            }
            return JSON.stringify(res);
    }

    async getLogsUserToChannel(user_name: string, channel_name: string) {
        // try {
            const user = await this.prisma.user.findUnique({
                where: {
                    username: user_name,
                },
            });
            const channel = await this.prisma.channel.findUnique({
                where: {
                    name: channel_name,
                },
                include: {
                    messages: true,
                },
            });
			if (!channel)
				throw new BadRequestException("Channel not found");
			if (!user)
				throw new BadRequestException("User not found");
			const res: Message[] = [];
			for (let i = 0; i < channel.messages.length; i++) {
				if (channel.messages[i].authorId == user.id) {
					const msg: Message = {
						...channel.messages[i],
						senderName:
							await this.serviceUtils.findUsernameFromId(
								channel.messages[i].authorId
							),
						sent: true,
					};
					res.push(msg);
				}
			}
			return JSON.stringify(res);
    }

    async getMessages(sender: any, receiver: any) {
        // try {
            if (!sender)
				throw new BadRequestException("Channel not found");
			if (!receiver)
				throw new BadRequestException("User not found");
            const messages = await this.prisma.message.findMany({
                where: {
                    authorId: sender.id,
                    targetId: receiver.id,
                },
            });
            const res: Message[] = [];
            for (let i = 0; i < messages.length; i++) {
                const msg: Message = {
                    ...messages[i],
                    senderName: await this.serviceUtils.findUsernameFromId(
                        messages[i].authorId
                    ),
                    sent: true,
                };
                res.push(msg);
            }
            return JSON.stringify(res);
    }
}
