import { Injectable, Logger } from "@nestjs/common";
import { ServerToClientEvents } from "src/types/events";
import { Message } from "src/types/message.entity";
import { Server } from 'socket.io'
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";
import { Socket } from "dgram";

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

    async sendToChannel(io:Server, channel:string, message:string){
        io.to(channel).emit('newChannelMessage', message);
    }
}