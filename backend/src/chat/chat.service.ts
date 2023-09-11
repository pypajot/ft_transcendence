import { Injectable, Logger } from "@nestjs/common";
import { ServerToClientEvents } from "src/types/events";
import { Message } from "src/types/message.entity";
import { Server } from 'socket.io'
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";
import { Socket } from "dgram";
import { WsException } from "@nestjs/websockets";
import { PrivMsgLogsDto } from "src/dto";


@Injectable()
export class ChatControllerService{
    prisma = new PrismaClient();

    //Receive an event asking for messages
    async getLogs(sender_name: string, receiver_name: string) {
    console.log(`Nice : ${sender_name}, ${receiver_name}`)
    try {
        const sender = await this.prisma.user.findUnique({
            where:{
                username: sender_name 
            }
        })
        console.log(`Let goo : ${(await sender.username)}`)
        const receiver = await this.prisma.user.findUnique({
            where:{
                username: receiver_name
            }
        })
        const json_messages = this.getMessages(await sender, await receiver);
        return (json_messages);
    }
    catch(error)
    {
        console.log(error);
    }
    }

    async getMessages(sender: any, receiver: any) {
        console.log(`${sender.id}, ${receiver.id}`);
        const messages = await this.prisma.message.findMany({
            where: {
                authorSocketId: sender.socketId,
                targetSocketId: receiver.socketId
            }
        })
        console.log(JSON.stringify(messages));
        return (JSON.stringify(messages));
    }
}

@Injectable()
export class ChatGatewayService {
    private readonly logger = new Logger(ChatGatewayService.name);
    prisma = new PrismaClient();

    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined {
        return cli_arr.find(cli_arr => cli_arr.socket_id === client_id);
      }

    async createMessage(socket_id: any, message: string, target: string) {
        /*
        let message_obj: Message = {
            message: message[0],
            id:msg_id,
            target: message[1],
        }*/
        const targetUser = await this.prisma.user.findUnique({
            where: {
                username: target
            },
        });
        try {
        const msg = await this.prisma.message.create({
            data: {
                content: message,
                author: {
                    connect: { socketId: socket_id }
                },
                target: {
                    connect: {socketId: targetUser.socketId}
                },
            }
        })
        return (msg);
        }
        catch(error)
        {
//Catch if we cant create the message
        }
    }

    async new_cli(client: any, name: string) {
		const chatUser = await this.prisma.user.update({
			where: {
					username : name,
				},
			data:{
				socketId: client.id,
			}
           });
           console.log(chatUser.socketId);
    }

    sendMessage(io: Server, message: Message){
        io.emit('message', message);
    }

    async newMember(client: any, channelName: string){
        const socket_id = client.id;
			const existingChannel = await this.prisma.channel.findUnique({
				where: {
					name : channelName
				}
			})
			const user = await this.prisma.user.findUnique({
						where: {
							socketId: socket_id
						},
			})
			if (existingChannel) {
                const newUserChannel = await this.prisma.channel.update({
                    where: {
                        name: channelName
                    },
                    data: {
                        members:{connect: {id: user.id}}
                    }
                })
				client.join(channelName);
			}
			else {
				const newchannel = await this.prisma.channel.create({
					data: {
						name: channelName,
						creator: user.username,
                        members:{
                            connect: {id:user.id}
                        }
                    }
					});
                    client.join(channelName);
			}
   }

    async sendTo(io:Server, message: any){
        console.log(`test : ${message.content}`)
        io.to(message.targetSocketId).emit('message', message.content);
        this.logger.log(`Sent ${message}`);
    }
    async sendToChannel(io:Server, channel:string, message:string, socket_id: string){
        try {
		    const existingChannel = await this.prisma.channel.findUnique({
			    where: {
				    name : channel
			    }
	        })
            const msg = await this.prisma.message.create({
                data: {
                    content: message,
                    author: {
                        connect: { socketId: socket_id }
                    },
                    Channel: {
                        connect: { id: existingChannel.id}
                    }
                }
            })
            io.to(channel).emit('newChannelMessage', message);
        }
        catch(error)
        {
//Catch if we cant create the message
        }
        //
    }
}