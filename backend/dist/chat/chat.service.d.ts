import { Message } from "src/types/message.entity";
import { Server } from 'socket.io';
import { Client_elem } from "src/types/client.entity";
export declare class ChatService {
    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined;
    receiveMessage(client_id: any, message: any, cli_arr: any, msg_id: any): void;
    new_cli(id: any, name: any, client_id: any, cli_arr: any): void;
    sendMessage(io: Server, message: Message): void;
}
