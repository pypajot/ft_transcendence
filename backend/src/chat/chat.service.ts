import { Injectable, Logger } from "@nestjs/common";
import { ServerToClientEvents } from "src/types/events";
import { Message } from "src/types/message.entity";
import { Server } from 'socket.io'
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";
import { Socket } from "dgram";
import { WsException } from "@nestjs/websockets";

@Injectable()
export class ChatService {
    private readonly logger = new Logger(ChatService.name);
    prisma = new PrismaClient();

    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined {
        return cli_arr.find(cli_arr => cli_arr.socket_id === client_id);
      }

    async receiveMessage(socket_id: any, message: string[]) {
        /*
        let message_obj: Message = {
            message: message[0],
            id:msg_id,
            target: message[1],
        }*/
        /*
        const user = await this.prisma.user.update({
            where: {
                socketId: client.id
            },
        })*/
        try {
        const msg = await this.prisma.message.create({
            data: {
                content: message[0],
                author: {
                    connect: { socketId: socket_id }
                }
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
                const newUserChannel = await this.prisma.userChannel.create({
                    data: {
                        username: user.username,
                        User: {
                            connect: {id: user.id}
                        },
                        channel: {
                            connect: {id: existingChannel.id}
                        }
                    }
                })
				client.join(channelName);
			}
			else {
				const user = await this.prisma.user.findUnique({
							where: {
								socketId: socket_id
							},
				})
				const newchannel = await this.prisma.channel.create({
					data: {
						name: channelName,
						creator: user.username,
                    }
					});
                const newUserChannel = await this.prisma.userChannel.create({
                    data: {
                        username: user.username,
                        User: {
                            connect: {id: user.id}
                        },
                        channel: {
                            connect: {id : newchannel.id}
                        }
                    }
                })
                    client.join(channelName);
			}
   }

    async sendTo(io:Server, message: any, target: string){
        console.log(`test : ${message}`)
        const target_user = await this.prisma.user.findUnique({
            where: {
                username: target
            },
        })
        io.to(target_user.socketId).emit('message', message);
        this.logger.log(`Sent ${message} to ${target}`);
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