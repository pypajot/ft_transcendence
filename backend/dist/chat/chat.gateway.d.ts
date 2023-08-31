import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ServerToClientEvents } from "src/types/events";
import { ChatService } from "./chat.service";
import { Client_elem } from "src/types/client.entity";
declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private readonly chatService;
    id: number;
    id_msg: number;
    cli_arr: Client_elem[];
    private readonly logger;
    constructor(chatService: ChatService);
    io: Server<any, ServerToClientEvents>;
    afterInit(): void;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    handleEvent(client: any, data: string): void;
}
export default ChatGateway;
