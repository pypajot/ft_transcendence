import { Injectable, Logger } from '@nestjs/common';
import { Message, t_event } from 'src/types/message.entity';
import { Server } from 'socket.io';
import { MessageInfo } from 'src/types/message.info';
import { UtilsService } from './utills.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatGatewayService {
    constructor(
        private readonly utilsService: UtilsService,
        private prisma: PrismaService
    ) {}
    private readonly logger = new Logger(ChatGatewayService.name);

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
                    console.log('Muteed message creation fail');
                    return null;
                }
                const msg = await this.prisma.message.create({
                    include: {
                        Channel: true,
                    },
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
                            info: true,
                        },
                    })
                );
            }
            client.emit('InitChannels', channelArr);
        } catch (error) {
            console.log(error);
        }
    }

    async sendToUser(io: Server, message: any, socket_id: string) {
        try {
            const sender = await this.prisma.user.findUnique({
                where: {
                    id: (
                        await this.utilsService.findIdFromSocketId(socket_id)
                    )[0],
                },
            });
            const msgRes: Message = {
                ...message,
                senderName: sender.username,
                event: t_event.SENT,
            };
            io.to(socket_id).emit('messagePrivate', msgRes);
            msgRes.event = t_event.RCV;
            io.to(
                await this.utilsService.getSocketIdFromId(message.targetId)
            ).emit('messagePrivate', msgRes);
            console.log(
                await this.utilsService.getSocketIdFromId(message.targetId)
            );
            this.logger.log(`Sent ${message.content}`);
        } catch (error) {
            console.log(error);
        }
    }
}
