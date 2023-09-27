import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UtilsService } from './utills.service';
import { Channel } from 'src/types/interfacesList';
import { Server, Socket } from 'socket.io';
import { channelInfo } from 'src/types/channelInfo.entity';
import { joinChannelInfo } from './chat.gateway';
import { Message } from 'src/types/message.entity';

@Injectable()
export class ChannelService {
    prisma = new PrismaClient();
    constructor(private readonly serviceUtils: UtilsService) {}

    async unMute(userId: number, channel: any, moderationId: number) {
        //Delete moderation elem
        //
        await this.prisma.channel.update({
            where: {
                name: channel.name,
            },
            include: {
                info: true,
            },
            data: {
                info: {
                    disconnect: { id: moderationId },
                },
            },
        });
    }

    async muteUser(client: any, targetId: number, channelName: string) {
        try {
            const moderation = await this.prisma.managementChannel.create({
                data: {
                    type: 'mute',
                    target: {
                        connect: { id: targetId },
                    },
                    channel: {
                        connect: { name: channelName },
                    },
                },
            });
            await this.prisma.channel.update({
                where: {
                    name: channelName,
                },
                data: {
                    info: {
                        connect: { id: moderation.id },
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    async KickUser(
        io: Server,
        targetId,
        channelName: string,
        socketArr: Socket[]
    ) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: targetId,
                },
            });
            io.to(user.socketId).emit('Kicked', channelName);
        } catch (error) {
            console.log(error);
        }
    }

    async unBan(targetId: number, channelName: string) {
        const channel = await this.prisma.channel.findUnique({
            where: {
                name: channelName,
            },
            include: {
                info: true,
            },
        });
        const id_arr = [];
        const moderation = channel.info;
        if (moderation) {
            moderation.map((elem) => {
                if (elem.type == 'ban') {
                    if (elem.targetId == targetId) {
                        id_arr.push(elem.id);
                    }
                }
            });
        }
        id_arr.map(async (moderationId) => {
            await this.prisma.channel.update({
                where: {
                    name: channelName,
                },
                data: {
                    info: {
                        disconnect: { id: moderationId },
                    },
                },
            });
        });
    }

    async BanUser(io: Server, targetId: number, channelName: string) {
        try {
            const newModeration = await this.prisma.managementChannel.create({
                data: {
                    type: 'ban',
                    target: {
                        connect: { id: targetId },
                    },
                },
            });
            const channel = await this.prisma.channel.update({
                where: {
                    name: channelName,
                },
                data: {
                    info: {
                        connect: { id: newModeration.id },
                    },
                },
                include: {
                    info: true,
                },
            });
            const user = await this.prisma.user.update({
                where: {
                    id: targetId,
                },
                include: {
                    channels: true,
                },
                data: {
                    channels: {
                        disconnect: { id: channel.id },
                    },
                },
            });
            io.to(user.socketId).emit('Kicked', channel);
        } catch (error) {
            console.log(error);
        }
    }

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

    async leaveChannel(io, client: any, info: any) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    username: info.user,
                },
            });
            const channelToLeave = await this.prisma.channel.findUnique({
                where: {
                    name: info.channelName,
                },
                include: {
                    members: true,
                },
            });
            const print = await this.prisma.channel.update({
                where: {
                    name: info.channelName,
                },
                include: { members: true },
                data: {
                    members: {
                        disconnect: { id: user.id },
                    },
                },
            });

            const leavingUser = await this.prisma.user.update({
                where: {
                    username: info.user,
                },
                include: {
                    channels: true,
                },
                data: {
                    channels: {
                        disconnect: { id: channelToLeave.id },
                    },
                },
            });
            client.leave(info.channelName);
            this.updateChannel(io, info.channelName);
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
                const moderation = await this.prisma.managementChannel.create({
                    data: {
                        type: 'init',
                        target: {
                            connect: { id: user.id },
                        },
                    },
                });
                const newchannel = await this.prisma.channel.create({
                    data: {
                        name: data_chan.name,
                        owner: user.id,
                        members: {
                            connect: { id: user.id },
                        },
                        public: public_chan,
                        password: data_chan.pwd,
                        invited: [],
                        admins: [user.id],
                        info: {
                            connect: { id: moderation.id },
                        },
                    },
                    include: {
                        members: true,
                        info: true,
                    },
                });
                client.join(data_chan.name);
                client.emit('successfullyJoinedChannel', newchannel);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async updateChannel(io: Server, channel_name) {
        try {
            const channel = await this.prisma.channel.findUnique({
                where: {
                    name: channel_name,
                },
                include: {
                    members: true,
                    info: true,
                },
            });
            channel.members.map((user) => {
                console.log(` teasssee : ${user.id}`);
                io.to(user.socketId).emit('updateChannel', channel);
            });
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
                include: {
                    info: true,
                    members: true,
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
                if (this.serviceUtils.isBan(user.id, existingChannel)) {
                    client.emit('Error', { Banned: true });
                    return;
                } else if (!existingChannel.public) {
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
                    include: {
                        members: true,
                    },
                });
                console.log(newUpdatedChannel);
                client.emit('successfullyJoinedChannel', newUpdatedChannel);
                this.updateChannel(io, info.name);
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
                ...message,
                senderName: sender.username,
                sent: true,
            };
            io.to(channel_name).emit('messageChannel', msgRes);
        } catch (error) {
            console.log(error);
        }
    }
}
