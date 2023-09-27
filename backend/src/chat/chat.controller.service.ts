import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Conversation } from 'src/types/conversation.entity';
import { Message } from 'src/types/message.entity';
import { UtilsService } from './utills.service';

@Injectable()
export class ChatControllerService {
    constructor(private readonly serviceUtils: UtilsService) {}
    prisma = new PrismaClient();

    async getFriendsList(user_name: string) {
        console.log(user_name);
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
            console.log(error);
        }
    }

    async getLogsUserToUser(sender_name: string, receiver_name: string) {
        try {
            console.log(`From  : ${sender_name} To : ${receiver_name}`);
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
        } catch (error) {
            console.log(error);
        }
    }

    async getChannelLogsToUser(channel_name: string, user_name: string) {
        try {
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
            const res: Message[] = [];
            for (
                let i = 0;
                channel && channel.messages && i < channel.messages.length;
                i++
            ) {
                if (channel.messages[i].authorId != user.id) {
                    const msg: Message = {
                        id: channel.messages[i].id,
                        content: channel.messages[i].content,
                        createdAt: channel.messages[i].createdAt,
                        senderName: await this.serviceUtils.findUsernameFromId(
                            channel.messages[i].authorId
                        ),
                        authorId: channel.messages[i].authorId,
                        sent: false,
                    };
                    res.push(msg);
                }
            }
            console.log(`msgRCV from : ${channel_name} to ${user_name}:`);
            console.log(res);
            return JSON.stringify(res);
        } catch (error) {
            console.log(error);
        }
    }

    async getLogsUserToChannel(user_name: string, channel_name: string) {
        try {
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
            if (channel && user) {
                const res: Message[] = [];
                for (let i = 0; i < channel.messages.length; i++) {
                    if (channel.messages[i].authorId == user.id) {
                        const msg: Message = {
                            id: channel.messages[i].id,
                            content: channel.messages[i].content,
                            createdAt: channel.messages[i].createdAt,
                            senderName: user_name,
                            authorId: channel.messages[i].authorId,
                            targetId: channel.messages[i].targetId,
                            sent: true,
                        };
                        res.push(msg);
                    }
                }
                console.log(`msgSent from : ${user_name} :`);
                console.log(res);
                return JSON.stringify(res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getMessages(sender: any, receiver: any) {
        try {
            if (!sender || !receiver) {
                return;
            }
            console.log(`Hello ${sender.id}, ${receiver.id}`);
            const messages = await this.prisma.message.findMany({
                where: {
                    authorId: sender.id,
                    targetId: receiver.id,
                },
            });
            return JSON.stringify(messages);
        } catch (error) {
            console.log(error);
        }
    }
}
