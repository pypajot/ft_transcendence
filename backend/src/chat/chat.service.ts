import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'src/types/message.entity';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import { Conversation } from 'src/types/conversation.entity';
import { MessageInfo } from 'src/types/message.info';
import { UtilsService } from './utills.service';
import { Channel } from 'src/types/interfacesList';

@Injectable()
export class ChatGatewayService {
    constructor(private readonly utilsService: UtilsService) {}
    private readonly logger = new Logger(ChatGatewayService.name);

    prisma = new PrismaClient();

    async requestFriends(io: Server, socket_id, userToAdd: string) {
        try {
            let friendsList;
            const target = await this.prisma.user.findUnique({
                where: {
                    username: userToAdd,
                },
            });
            if (!target) {
                io.to(socket_id).emit('badFriendsRequest');
                return;
            }
            const user = await this.prisma.user.findUnique({
                where: {
                    id: (
                        await this.utilsService.findIdFromSocketId(socket_id)
                    )[0],
                },
            });
            if (target.id == user.id) {
                return;
            }
            if (user.friends) {
                friendsList = user.friends.filter((id) => {
                    console.log(id, target.id);
                    if (id == target.id) {
                        return false;
                    }
                    return true;
                });
                friendsList = [...friendsList, target.id];
            } else {
                friendsList = [target.id];
            }
            const userUpdate = await this.prisma.user.update({
                where: {
                    username: user.username,
                },
                data: {
                    friends: {
                        set: friendsList,
                    },
                },
            });
            let targetFriendsList;
            if (target.friends) {
                targetFriendsList = [...target.friends, user.id];
            } else {
                targetFriendsList = [user.id];
            }
            const targetUpdate = await this.prisma.user.update({
                where: {
                    username: target.username,
                },
                data: {
                    friends: {
                        set: targetFriendsList,
                    },
                },
            });
            io.to(socket_id).emit('goodFriendsRequest');
        } catch (error) {
            console.log(error);
        }
    }

    async respondToGetFriendsList(socket_id: string, io: Server) {
        try {
            const userList = await this.prisma.user.findMany({
                where: {
                    socketId: { not: socket_id },
                },
            });
            console.log(await userList);
            io.emit('ResponseGetFriendsList', await userList);
        } catch (error) {
            console.log(error);
        }
    }
    async createMessage(socket_id: any, info: MessageInfo) {
        /*
        let message_obj: Message = {
            message: message[0],
            id:msg_id,
            target: message[1],
        }*/
        try {
            if (info.ToUser) {
                const targetUser = await this.prisma.user.findUnique({
                    where: {
                        username: info.target,
                    },
                });
                const msg = await this.prisma.message.create({
                    data: {
                        content: info.content,
                        author: {
                            connect: {
                                id: (
                                    await this.utilsService.findIdFromSocketId(
                                        socket_id
                                    )
                                )[0],
                            },
                        },
                        target: {
                            connect: {
                                id: (
                                    await this.utilsService.findIdFromSocketId(
                                        targetUser.socketId
                                    )
                                )[0],
                            },
                        },
                    },
                });
                return msg;
            } else {
                const userId = (
                    await this.utilsService.findIdFromSocketId(socket_id)
                )[0];
                console.log(userId);
                const channel = await this.prisma.channel.findUnique({
                    where: {
                        name: info.target,
                    },
                    include: {
                        info: true,
                    },
                });
                if (this.utilsService.isMute(userId, channel)) {
                    return null;
                }
                const msg = await this.prisma.message.create({
                    data: {
                        content: info.content,
                        author: {
                            connect: {
                                id: userId,
                            },
                        },
                        Channel: {
                            connect: { id: channel.id },
                        },
                    },
                });
                return msg;
            }
        } catch (error) {
            console.log(error);
            //Catch if we cant create the message
        }
    }

    async new_cli(client: any, name: string) {
        try {
            const chatUser = await this.prisma.user.update({
                where: {
                    username: name,
                },
                include: {
                    channels: true,
                },
                data: {
                    socketId: client.id,
                    status: 'online',
                },
            });
            const channelArr = [];
            for (let i = 0; i < chatUser.channels.length; i++) {
                client.join(chatUser.channels[i].name);
                channelArr.push(
                    await this.prisma.channel.findUnique({
                        where: {
                            name: chatUser.channels[i].name,
                        },
                        include: {
                            members: true,
                        },
                    })
                );
            }
            console.log(channelArr);
            client.emit('InitChannels', channelArr);
        } catch (error) {
            console.log(error);
        }
    }

    async sendToUser(io: Server, message: any, socket_id: string) {
        try {
            console.log(`test : ${message.content}`);
            const sender = await this.prisma.user.findUnique({
                where: {
                    id: (
                        await this.utilsService.findIdFromSocketId(socket_id)
                    )[0],
                },
            });
            const msgRes: Message = {
                id: message.id,
                authorId: message.authorId,
                targetId: message.targetId,
                senderName: sender.username,
                sent: true,
                content: message.content,
                createdAt: message.createdAt,
            };
            io.to(socket_id).emit('messageSent', msgRes);
            msgRes.sent = false;
            io.to(
                await this.utilsService.getSocketIdFromId(message.targetId)
            ).emit('messageRcv', msgRes);
            console.log(
                await this.utilsService.getSocketIdFromId(message.targetId)
            );
            this.logger.log(`Sent ${message.content}`);
        } catch (error) {
            console.log(error);
        }
    }
}
