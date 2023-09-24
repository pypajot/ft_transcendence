import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UtilsService } from './utills.service';
import { Channel } from 'src/types/interfacesList';
import { Server } from 'socket.io';
import { channelInfo } from 'src/types/channelInfo.entity';
import { joinChannelInfo } from './chat.gateway';
import { Message } from 'src/types/message.entity';

@Injectable()
export class ChannelService {
    prisma = new PrismaClient();
    constructor(private readonly serviceUtils: UtilsService) {}

    async inviteToChannel(io: Server, client: any, data: any) {
        try {
            const channel = await this.prisma.channel.findUnique({
                where: {
                    name: data.channel,
                },
            });
            const user = await this.prisma.user.findUnique({
                where: {
                    username: data.target,
                },
            });
            if (!channel.invited) {
                channel.invited = [user.id];
            }
            const updatedChannel = await this.prisma.channel.update({
                where: {
                    name: channel.name,
                },
                include: {
                    members: true,
                },
                data: {
                    invited: [...channel.invited, user.id],
                },
            });
            const res: Channel = {
                name: updatedChannel.name,
                member: this.serviceUtils.getChannelMember(updatedChannel),
            };
            io.to(user.socketId).emit('joinRequest', res);
        } catch (error) {
            console.log(error);
        }
    }

    async channelInviteResponse(client: any, data: any) {
        try {
            const userId = await this.serviceUtils.findIdFromSocketId(
                client.id
            );
            const channel = await this.prisma.channel.findUnique({
                where: {
                    name: data.channel,
                },
                include: {
                    members: true,
                },
            });
            channel.invited.map((id, i) => {
                if (id != userId) {
                    //Error not possible
                    return;
                }
            });
            const user = await this.prisma.user.findUnique({
                where: {
                    id: userId[0],
                },
            });
            if (data.response) {
                const channelUpdate = await this.prisma.channel.update({
                    where: {
                        name: data.channel,
                    },
                    data: {
                        members: {
                            connect: { id: user.id },
                        },
                    },
                });
            }
            const newId = channel.invited.filter((id) => {
                if (id == user.id) {
                    return false;
                }
                return true;
            });
            await this.prisma.channel.update({
                where: {
                    name: data.channel,
                },
                data: {
                    invited: {
                        set: newId,
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    async responsePendingRequest(client: any, username: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                username: username,
            },
        });
        const channelReqList = [];
        const channelList = await this.prisma.channel.findMany({});
        channelList.map((channel) => {
            if (channel.invited) {
                channel.invited.map((id) => {
                    if (id == user.id) {
                        channelReqList.push(channel);
                    }
                });
            }
        });
        client.emit('InitChannelsRequest', channelReqList);
    }

    async leaveChannel(client: any, info: any) {
        try {
            const userLeaving = await this.prisma.user.findMany({
                where: {
                    username: info.username,
                },
                include: {
                    channels: true,
                },
            });

            const channel = await this.prisma.channel.findMany({});

            const updatedChannelList = channel.filter((channel) => {
                if (channel.name == info.channelName) {
                    return false;
                }
                return true;
            });
            await this.prisma.user.update({
                where: {
                    username: info.username,
                },
                include: {
                    channels: true,
                },
                data: {
                    channels: {
                        set: updatedChannelList as any,
                    },
                },
            });
            client.leave(info.channelName);
        } catch (error) {
            console.log(error);
        }
    }

    async channelCreation(
        io: Server,
        data_chan: channelInfo,
        client_id: string,
        client: any
    ) {
        try {
            let public_chan = false;
            if (data_chan.type == 'Public') {
                public_chan = true;
            }
            const existingChannel = await this.prisma.channel.findUnique({
                where: {
                    name: data_chan.name,
                },
            });
            const user = await this.prisma.user.findUnique({
                where: {
                    id: (
                        await this.serviceUtils.findIdFromSocketId(client_id)
                    )[0],
                },
            });
            if (existingChannel) {
                io.to(client_id).emit('Error', {
                    alreadyUsedChannelName: true,
                });
                return;
            } else {
                const newchannel = await this.prisma.channel.create({
                    data: {
                        name: data_chan.name,
                        creator: user.username,
                        members: {
                            connect: { id: user.id },
                        },
                        public: public_chan,
                        password: data_chan.pwd,
                        invited: [],
                    },
                });
                const channelJoined: Channel = {
                    member: this.serviceUtils.getChannelMember(newchannel),
                    name: newchannel.name,
                };
                client.join(data_chan.name);
                client.emit('successfullyJoinedChannel', channelJoined);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async newChannelMember(io: Server, client: any, info: joinChannelInfo) {
        try {
            const existingChannel = await this.prisma.channel.findUnique({
                where: {
                    name: info.name,
                },
            });
            const user = await this.prisma.user.findUnique({
                where: {
                    id: (
                        await this.serviceUtils.findIdFromSocketId(client.id)
                    )[0],
                },
            });
            //Add check about channel right
            if (existingChannel) {
                if (!existingChannel.public) {
                    let find = false;
                    if (existingChannel.invited) {
                        for (
                            let i = 0;
                            i < existingChannel.invited.length;
                            i++
                        ) {
                            if (existingChannel.invited[i] == user.id) {
                                find = true;
                                break;
                            }
                        }
                    }
                    if (!find) {
                        client.emit('Error', { wrongPrivileges: true });
                        return;
                    }
                } else if (info.pass == '' && existingChannel.password != '') {
                    client.emit('requestPassword');
                    return;
                } else if (info.pass != existingChannel.password) {
                    client.emit('Error', { wrongPassword: true });
                    return;
                }
                const newUpdatedChannel = await this.prisma.channel.update({
                    where: {
                        name: info.name,
                    },
                    data: {
                        members: { connect: { id: user.id } },
                    },
                });
                const channelJoined: Channel = {
                    member: this.serviceUtils.getChannelMember(
                        newUpdatedChannel
                    ),
                    name: newUpdatedChannel.name,
                };
                client.join(info.name);
                client.emit('successfullyJoinedChannel', channelJoined);
            } else {
                client.emit('Error', { noSuchChannelName: true });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async sendToChannel(
        io: Server,
        message: any,
        socket_id: string,
        channel_name: string
    ) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: (
                        await this.serviceUtils.findIdFromSocketId(socket_id)
                    )[0],
                },
            });
            const sender = await this.prisma.user.findUnique({
                where: {
                    id: message.authorId,
                },
            });
            const msgRes: Message = {
                id: message.id,
                authorId: message.authorId,
                senderName: sender.username,
                sent: true,
                content: message.content,
                createdAt: message.createdAt,
            };
            io.to(channel_name).emit('messageChannel', msgRes);
        } catch (error) {
            console.log(error);
        }
    }
}
