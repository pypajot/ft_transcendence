import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ServerToClientEvents } from "src/types/events";
import { ChatService } from "./chat.service";
declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private readonly chatService;
    constructor(chatService: ChatService);
    io: Server<any, ServerToClientEvents>;
    afterInit(): void;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    handleEvent(data: string): void;
}
export default ChatGateway;
