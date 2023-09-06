import { Message } from "src/types/message.entity";
import { Server } from 'socket.io';
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";
export declare class ChatService {
    private readonly logger;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined;
    receiveMessage(client: any, message: string): Promise<void>;
    new_cli(client: any, name: string): Promise<void>;
    sendMessage(io: Server, message: Message): void;
    sendTo(io: Server, message: String, target: string, cli_arr: Client_elem[]): Promise<void>;
    sendToChannel(io: Server, channel: string, message: string): Promise<void>;
}
