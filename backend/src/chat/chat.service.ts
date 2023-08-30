import { Injectable } from "@nestjs/common";
import { ServerToClientEvents } from "src/types/events";
import { Message } from "src/types/message.entity";
import { Server } from 'socket.io'

@Injectable()
export class ChatService {
    sendMessage(io: Server, message: Message){
        io.emit('message', message);
    }
}