import { Injectable } from '@nestjs/common';
import { UtilsService } from './utills.service';
import { Channel } from 'src/types/interfacesList';
import { Server, Socket } from 'socket.io';
import { channelInfo } from 'src/types/channelInfo.entity';
import { joinChannelInfo } from './chat.gateway';
import { Message } from 'src/types/message.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class ChannelService {
    constructor(private readonly serviceUtils: UtilsService, 
        private prisma: PrismaService) {}

    async unMute(userId: number, channel: any, moderationId: number, io: any) {
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
		this.updateChannel(io, channel.name);
    }

    async muteUser(client: any, targetId: number, channelName: string, io: any) {
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
			this.updateChannel(io, channelName);
        } catch (error) {
            console.log(error);
        }
    }

    async sudoUser(io: Server, targetId, channelName) {
        try {
            const target = await this.prisma.user.findUnique({
                where: {
                    id: targetId,
                },
            });
            const channel = await this.prisma.channel.findUnique({
                where: {
                    name: channelName,
                },
            });
            for (const id of channel.admins) {
                if (id == targetId) {
                    return;
                }
            }
            await this.prisma.channel.update({
                where: {
                    name: channelName,
                },
                data: {
                    admins: [...channel.admins, targetId],
                },
            });
            this.updateChannel(io, channel.name);
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
			this.updateChannel(io, channelName);
        } catch (error) {
            console.log(error);
        }
    }

    async unBan(targetId: number, channelName: string, io: any) {
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
		this.updateChannel(io, channel.name);
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
            io.to(user.socketId).emit('Kicked', channel.name);
			this.updateChannel(io, channel.name);
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

	async deleteFromChannel(channelName: string, id: number) {
		let channel = await this.prisma.channel.update({
			where: {
				name: channelName,
			},
			include: { members: true },
			data: {
				members: {
					disconnect: { id: id },
				},
			},
		});
		if (channel.admins.includes(id))
			channel.admins.splice(channel.admins.indexOf(id), 1);
		if (channel.owner !== id)
			return ;
		if (channel.admins.length > 0) {
			channel.owner = channel.admins[0];
		}
		else if (channel.members.length > 0) {
			channel.admins.push(channel.members[0].id);
			channel.owner = channel.members[0].id;
		}
		return await this.prisma.channel.update({
			where: {
				name: channelName,
			},
			data: {
				owner: channel.owner,
				admins: channel.admins,
			}
		})
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
            const channelLeft = await this.deleteFromChannel(info.channelName, user.id);
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
			console.log('channel left: ', channelLeft);
			if (channelLeft.admins.length === 0)
				this.deleteChannel(io, client, info.channelName)
			else
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
		if (data_chan.name === "")
			throw new WsException({func: "channelCreation", msg: "Channel name cannot be empty"})
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
			throw new WsException({func: "channelCreation", msg: "Channel name alreay taken"})
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
			console.log(newchannel);
			client.emit('successfullyJoinedChannel', newchannel);
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
                },
            });
			const info = await this.prisma.managementChannel.findMany({
				where: {
					channelName: channel.name
				},
				include: {
					target: true,
				}

			})
            channel.members.map((user) => {
                io.to(user.socketId).emit('updateChannel', {...channel, info: info});
            });
        } catch (error) {
            console.log(error);
        }
    }
    async newChannelMember(io: Server, client: any, info: joinChannelInfo) {
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
		if (!existingChannel)
			throw new WsException({func: "joinChannel", msg: "No such channel"})
		if (existingChannel.members.findIndex(member => (member.id === user.id)) !== -1)
			throw new WsException({func: "joinChannel", msg: "You are already in this channel"})
		if (this.serviceUtils.isBan(user.id, existingChannel)) {
			throw new WsException({func: "joinChannel", msg: "You are banned"})
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
				throw new WsException({func: "joinChannel", msg: "You need an invite"})
			}
		} else if (info.pass === undefined && existingChannel.password !== "") {
			console.log("test 1");
			client.emit('requestPassword');
			return;
		} else if (info.pass !== undefined && info.pass !== existingChannel.password) {
			console.log("test 2");
			throw new WsException({func: "joinChannel", msg: "Invalid password"})
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
		client.join(newUpdatedChannel.name);
		client.emit('successfullyJoinedChannel', newUpdatedChannel);
		this.updateChannel(io, info.name);
            
        // } catch (error) {
			// console.log("error", error.error)
        //     throw new WsException(error.error);
        // }
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
                channel: message.Channel,
            };
            io.to(channel_name).emit('messageChannel', msgRes);
        } catch (error) {
            console.log(error);
        }
    }

	async deleteChannel(server: any, client: any, channelName: string) {
		const channel = await this.prisma.channel.delete({
			where: {
				name: channelName,
			},
		});
		server.to(channelName).emit("deleteChannel", channelName);
	}
}
