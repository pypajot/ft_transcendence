import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ServerToClientEvents } from "src/types/events";
import { ChatGatewayService } from "./chat.service";
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";
declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private readonly chatService;
    id: number;
    id_msg: number;
    cli_arr: Client_elem[];
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
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
