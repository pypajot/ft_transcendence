import { Message } from "src/types/message.entity";
import { Server } from 'socket.io';
export declare class ChatService {
    sendMessage(io: Server, message: Message): void;
}
