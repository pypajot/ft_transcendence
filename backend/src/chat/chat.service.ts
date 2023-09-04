import { Injectable, Logger } from "@nestjs/common";
import { ServerToClientEvents } from "src/types/events";
import { Message } from "src/types/message.entity";
import { Server } from 'socket.io'
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ChatService {
    private readonly logger = new Logger(ChatService.name);
    prisma = new PrismaClient();

    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined {
        return cli_arr.find(cli_arr => cli_arr.socket_id === client_id);
      }

    receiveMessage(client_id, message, cli_arr, msg_id) {
        let message_obj: Message = {
            message: message[0],
            id:msg_id,
            target: message[1],
        }
        let user :Client_elem = this.findUserById(client_id, cli_arr);
        if (user) {
            user.messages.push(message[0]);
        }
    }

    new_cli(id, name, client_id, cli_arr) {
        this.logger.log(`New Client : ${client_id}, Username: ${name}`)
        let cli: Client_elem = {id:id, name:name, socket_id:client_id, messages: []};
        cli_arr.push(cli);
    }

    sendMessage(io: Server, message: Message){
        io.emit('message', message);
    }

    async sendTo(io:Server, message: String, target: string, cli_arr: Client_elem[]){
        /*
        const target_user = await this.prisma.user.findMany({
            where: {
                username: {
                    search: target,
                },
            },
        })*/
        const target_id = cli_arr.filter(cli_arr => cli_arr.name == target)[0];
        console.log(`${target_id.socket_id} || ${target_id.name}\n`);
        io.to(target_id.socket_id).emit('message', message);
        this.logger.log(`Sent ${message} to ${target}`);
    }

}