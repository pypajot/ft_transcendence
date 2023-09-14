import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'src/types/message.entity';
import { Server } from 'socket.io';
import { Client_elem } from 'src/types/client.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ChatControllerService {
  prisma = new PrismaClient();

  //Receive an event asking for messages

  async getFriendsList(user_name: string) {
    try {
      const friendsList = await this.prisma.user.findMany({
        where: {
          NOT: {
            username: user_name,
          },
        },
      });
      console.log(await friendsList);
      return await friendsList;
    } catch (error) {
      console.log(error);
    }
  }
  async getLogs(sender_name: string, receiver_name: string) {
    try {
      console.log(`Nice : ${sender_name}, ${receiver_name}`);
      const sender = await this.prisma.user.findUnique({
        where: {
          username: sender_name,
        },
      });
      console.log(`Let goo : ${await sender.username}`);
      const receiver = await this.prisma.user.findUnique({
        where: {
          username: receiver_name,
        },
      });
      const json_messages = await this.getMessages(
        await sender,
        await receiver,
      );
      console.log(
        `from : ${sender_name} to ${receiver_name} \n ${json_messages}`,
      );
      return json_messages;
    } catch (error) {
      console.log(error);
    }
  }

  async getMessages(sender: any, receiver: any) {
    try {
      console.log(`${sender.id}, ${receiver.id}`);
      const messages = await this.prisma.message.findMany({
        where: {
          authorSocketId: sender.socketId,
          targetSocketId: receiver.socketId,
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
  async createMessage(socket_id: any, message: string, target: string) {
    /*
        let message_obj: Message = {
            message: message[0],
            id:msg_id,
            target: message[1],
        }*/
    try {
      console.log(message);
      const targetUser = await this.prisma.user.findUnique({
        where: {
          username: target,
        },
      });
      const msg = await this.prisma.message.create({
        data: {
          content: message,
          author: {
            connect: { socketId: socket_id },
          },
          target: {
            connect: { socketId: targetUser.socketId },
          },
        },
      });
      return msg;
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

  async newMember(client: any, channelName: string) {
    const socket_id = client.id;
    try {
      const existingChannel = await this.prisma.channel.findUnique({
        where: {
          name: channelName,
        },
      });
      const user = await this.prisma.user.findUnique({
        where: {
          socketId: socket_id,
        },
      });
      if (existingChannel) {
        const newUserChannel = await this.prisma.channel.update({
          where: {
            name: channelName,
          },
          data: {
            members: { connect: { id: user.id } },
          },
        });
        client.join(channelName);
      } else {
        const newchannel = await this.prisma.channel.create({
          data: {
            name: channelName,
            creator: user.username,
            members: {
              connect: { id: user.id },
            },
          },
        });
        client.join(channelName);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async sendTo(io: Server, message: any, socket_id: string) {
    try {
      console.log(`test : ${message.content}`);
      const msgRes: Message = await {
        id: message.id,
        authorSocketId: message.authorSocketId,
        targetSocketId: message.targetSocketId,
        sent: true,
        content: message.content,
        createdAt: message.createdAt,
      };
      io.to(socket_id).emit('messageSent', msgRes);
      msgRes.sent = false;
      io.to(message.targetSocketId).emit('messageRcv', msgRes);
      this.logger.log(`Sent ${message.content}`);
    } catch (error) {
      console.log(error);
    }
  }

  async sendToChannel(
    io: Server,
    channel: string,
    message: string,
    socket_id: string,
  ) {
    try {
      const existingChannel = await this.prisma.channel.findUnique({
        where: {
          name: channel,
        },
      });
      const msg = await this.prisma.message.create({
        data: {
          content: message,
          author: {
            connect: { socketId: socket_id },
          },
          Channel: {
            connect: { id: existingChannel.id },
          },
        },
      });
      io.to(channel).emit('newChannelMessage', message);
    } catch (error) {
      //Catch if we cant create the message
    }
    //
  }
}
