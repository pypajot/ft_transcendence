/// <reference types="node" />
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ServerToClientEvents } from "src/types/events";
import { ChatService } from "./chat.service";
import { Client_elem } from "src/types/client.entity";
import { Socket } from "dgram";
import { PrismaClient } from "@prisma/client";
declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private readonly chatService;
    id: number;
    id_msg: number;
    cli_arr: Client_elem[];
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    private readonly logger;
    constructor(chatService: ChatService);
    io: Server<any, ServerToClientEvents>;
    afterInit(): void;
    handleConnection(client: any, ...args: any[]): Promise<void>;
    handleDisconnect(client: any): void;
    handleEvent(client: any, data: string[]): void;
    handleChannelJoining(client: any, data: string): void;
    handleChannelMessage(client: Socket, data: string[]): void;
}
export default ChatGateway;
