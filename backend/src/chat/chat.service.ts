import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'src/types/message.entity';
import { Server } from 'socket.io';
import { Client_elem } from 'src/types/client.entity';
import { PrismaClient } from '@prisma/client';
import { channelInfo } from 'src/types/channelInfo.entity';
import { Conversation } from 'src/types/conversation.entity';
import { MessageInfo } from 'src/types/message.info';
import { joinChannelInfo } from './chat.gateway';
import { use } from 'passport';

@Injectable()
export class ChatControllerService {
  prisma = new PrismaClient();

  async findIdFromSocketId(socket_id: string) {
    try {
      const user = await this.prisma.user.findMany({
        where: {
          socketId: socket_id,
        },
      });
      if (user) {
        user.map((value) => {
          return value.id;
        });
      }
      return -1;
    } catch (error) {
      console.log(error);
    }
  }

  async findUsernameFromId(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return user.username;
    } catch (error) {
      console.log(error);
    }
  }
  //Receive an event asking for messages

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
            senderName: await this.findUsernameFromId(
              channel.messages[i].authorId,
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

interface User {
  id: number;
  username: string;
  avatar: string;
  socketId?: string;
  twoFactorAuthActive: boolean;
}

interface Channel {
  member: User[];
  name: string;
  picture?: string;
}

@Injectable()
export class ChatGatewayService {
  private readonly logger = new Logger(ChatGatewayService.name);

  prisma = new PrismaClient();

  async findIdFromSocketId(socket_id: string) {
    try {
      const user = await this.prisma.user.findMany({
        where: {
          socketId: socket_id,
        },
      });
      if (user) {
        return user.map((value) => {
          return value.id;
        });
      }
      return -1;
    } catch (error) {
      console.log(error);
    }
  }

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
          id: (await this.findIdFromSocketId(socket_id))[0],
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

  async getSocketIdFromId(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      if (user) {
        return user.socketId;
      }
      return '';
    } catch (error) {
      console.log(error);
    }
  }

  findUserById(
    client_id: string,
    cli_arr: Client_elem[],
  ): Client_elem | undefined {
    return cli_arr.find((cli_arr) => cli_arr.socket_id === client_id);
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
              connect: { id: (await this.findIdFromSocketId(socket_id))[0] },
            },
            target: {
              connect: {
                id: (await this.findIdFromSocketId(targetUser.socketId))[0],
              },
            },
          },
        });
        return msg;
      } else {
        const channel = await this.prisma.channel.findUnique({
          where: {
            name: info.target,
          },
        });
        const msg = await this.prisma.message.create({
          data: {
            content: info.content,
            author: {
              connect: { id: (await this.findIdFromSocketId(socket_id))[0] },
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
      let channelsJoined: Channel[] = [];
      for (let i = 0; i < chatUser.channels.length; i++) {
        const channelJoined: Channel = {
          member: this.getChannelMember(chatUser.channels[i]),
          name: chatUser.channels[i].name,
        };
        channelsJoined = [...channelsJoined, channelJoined];
        client.join(chatUser.channels[i].name);
      }
      client.emit('InitChannels', channelsJoined);
    } catch (error) {
      console.log(error);
    }
  }

  sendMessage(io: Server, message: Message) {
    io.emit('message', message);
  }

  getChannelMember(channel: any) {
    let users: User[] = [];

    if (channel.members) {
      for (let i = 0; i < channel.members.length; i++) {
        const user: User = {
          id: channel.members[i].id,
          username: channel.members[i].username,
          avatar: channel.members[i].avatar,
          socketId: channel.members[i].socketId,
          twoFactorAuthActive: channel.members[i].twoFactorAuthActive,
        };
        users = [...users, user];
      }
    }
    return users;
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
        member: this.getChannelMember(updatedChannel),
      };
      io.to(user.socketId).emit('joinRequest', res);
    } catch (error) {
      console.log(error);
    }
  }

  async channelInviteResponse(client: any, data: any) {
    try {
      const userId = await this.findIdFromSocketId(client.id);
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
    client: any,
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
          id: (await this.findIdFromSocketId(client_id))[0],
        },
      });
      if (existingChannel) {
        io.to(client_id).emit('channelNameTaken');
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
          member: this.getChannelMember(newchannel),
          name: newchannel.name,
        };
        client.join(data_chan.name);
        client.emit('successfullyJoinedChannel', channelJoined);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async newMember(io: Server, client: any, info: joinChannelInfo) {
    try {
      const existingChannel = await this.prisma.channel.findUnique({
        where: {
          name: info.name,
        },
      });
      const user = await this.prisma.user.findUnique({
        where: {
          id: (await this.findIdFromSocketId(client.id))[0],
        },
      });
      //Add check about channel right
      if (existingChannel) {
        if (!existingChannel.public) {
          let find = false;
          if (existingChannel.invited) {
            for (let i = 0; i < existingChannel.invited.length; i++) {
              if (existingChannel.invited[i] == user.id) {
                find = true;
                break;
              }
            }
          }
          if (!find) {
            client.emit('wrongPrivileges');
            return;
          }
        } else if (info.pass == '' && existingChannel.password != '') {
          client.emit('requestPassword');
          return;
        } else if (info.pass != existingChannel.password) {
          client.emit('wrongPassword');
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
          member: this.getChannelMember(newUpdatedChannel),
          name: newUpdatedChannel.name,
        };
        client.join(info.name);
        client.emit('successfullyJoinedChannel', channelJoined);
      } else {
        client.emit('wrongName');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async sendToChannel(
    io: Server,
    message: any,
    socket_id: string,
    channel_name: string,
  ) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: (await this.findIdFromSocketId(socket_id))[0],
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

  async sendToUser(io: Server, message: any, socket_id: string) {
    try {
      console.log(`test : ${message.content}`);
      const sender = await this.prisma.user.findUnique({
        where: {
          id: (await this.findIdFromSocketId(socket_id))[0],
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
      io.to(await this.getSocketIdFromId(message.targetId)).emit(
        'messageRcv',
        msgRes,
      );
      console.log(await this.getSocketIdFromId(message.targetId));
      this.logger.log(`Sent ${message.content}`);
    } catch (error) {
      console.log(error);
    }
  }
}
