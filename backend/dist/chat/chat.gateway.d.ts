import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ServerToClientEvents } from "src/types/events";
import { ChatGatewayService } from "./chat.service";
declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private readonly chatService;
    id: number;
    id_msg: number;
    username: any;
    private readonly logger;
    constructor(chatService: ChatGatewayService);
    io: Server<any, ServerToClientEvents>;
    afterInit(): void;
    handleConnection(client: any, ...args: any[]): Promise<void>;
    handleDisconnect(client: any): void;
    handleEvent(client: any, data: string[]): Promise<void>;
    handleChannelJoining(client: any, data: string): void;
    handleChannelMessage(client: any, data: string[]): void;
}
export default ChatGateway;
