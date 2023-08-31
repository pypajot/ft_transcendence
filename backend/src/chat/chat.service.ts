import { Injectable } from "@nestjs/common";
import { ServerToClientEvents } from "src/types/events";
import { Message } from "src/types/message.entity";
import { Server } from 'socket.io'
import { Client_elem } from "src/types/client.entity";

@Injectable()
export class ChatService {

    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined {
        return cli_arr.find(cli_arr => cli_arr.socket_id === client_id);
      }

    receiveMessage(client_id, message, cli_arr, msg_id) {
        let message_obj: Message = {
            message: message,
            id:msg_id
        }
        let user :Client_elem = this.findUserById(client_id, cli_arr);
        if (user) {
            user.messages.push(message);
        }
    }

    new_cli(id, name, client_id, cli_arr) {
        let cli: Client_elem = {id:id, name:name, socket_id:client_id, messages: []};
        cli_arr.push(cli);
    }

    sendMessage(io: Server, message: Message){
        io.emit('message', message);
    }

}