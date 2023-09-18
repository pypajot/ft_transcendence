import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'src/types/message.entity';
import { Server } from 'socket.io';
import { Client_elem } from 'src/types/client.entity';
import { PrismaClient } from '@prisma/client';
import { channelInfo } from 'src/types/channelInfo.entity';
import { use } from 'passport';
import { Conversation } from 'src/types/conversation.entity';
import { MessageInfo } from 'src/types/message.info';

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
      console.log(friends);
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
      for (let i = 0; i < channel.messages.length; i++) {
        if (channel.messages[i].authorId != user.id) {
          const msg: Message = {
            id: channel.messages[i].id,
            content: channel.messages[i].content,
            createdAt: channel.messages[i].createdAt,
            senderName: await this.findUsernameFromId(
              channel.messages[i].authorId,
            ),
            authorId: channel.messages[i].authorId,
            targetId: channel.messages[i].targetId,
            sent: false,
          };
          res.push(msg);
        }
        return JSON.stringify(res);
      }
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

@Injectable()
export class ChatGatewayService {
  private readonly logger = new Logger(ChatGatewayService.name);

  prisma = new PrismaClient();

  async findIdFromSocketId(socket_id: string) {
    try {
      console.log(` socket : ${socket_id} `);
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
            name: info.content,
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
    console.log(name);
    try {
      const chatUser = await this.prisma.user.update({
        where: {
          username: name,
        },
        data: {
          socketId: client.id,
        },
      });
      console.log(chatUser.socketId);
    } catch (error) {
      console.log(error);
    }
  }

  sendMessage(io: Server, message: Message) {
    io.emit('message', message);
  }

  async channelCreation(
    io: Server,
    data_chan: channelInfo,
    client_id: string,
    client: any,
  ) {
    try {
      let public_chan = false;
      if (data_chan.type == 'public') {
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
          },
        });
        client.join(data_chan.name);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async newMember(io: Server, client: any, channelName: string) {
    const socket_id = client.id;
    try {
      const existingChannel = await this.prisma.channel.findUnique({
        where: {
          name: channelName,
        },
      });
      const user = await this.prisma.user.findUnique({
        where: {
          id: (await this.findIdFromSocketId(socket_id))[0],
        },
      });
      //Add check about channel right
      if (existingChannel) {
        const newUserChannel = await this.prisma.channel.update({
          where: {
            name: channelName,
          },
          data: {
            members: { connect: { id: user.id } },
          },
        });
        console.log(channelName);
        client.join(channelName);
      } else {
        io.to(socket_id).emit('badChannelRequest');
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
      io.to(channel_name).emit('messageChan', msgRes);
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
      this.logger.log(`Sent ${message.content}`);
    } catch (error) {
      console.log(error);
    }
  }
}
