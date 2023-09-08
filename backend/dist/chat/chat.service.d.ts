import { Message } from "src/types/message.entity";
import { Server } from 'socket.io';
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";
export declare class ChatControllerService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getlogs(): Promise<void>;
}
export declare class ChatGatewayService {
    private readonly logger;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined;
    receiveMessage(socket_id: any, message: string[]): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        socketId: string;
        channelId: number;
    }>;
    new_cli(client: any, name: string): Promise<void>;
    sendMessage(io: Server, message: Message): void;
    newMember(client: any, channelName: string): Promise<void>;
    sendTo(io: Server, message: any, target: string): Promise<void>;
    sendToChannel(io: Server, channel: string, message: string, socket_id: string): Promise<void>;
}
