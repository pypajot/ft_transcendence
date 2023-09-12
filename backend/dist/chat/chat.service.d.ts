import { Message } from "src/types/message.entity";
import { Server } from 'socket.io';
import { Client_elem } from "src/types/client.entity";
import { PrismaClient } from "@prisma/client";
export declare class ChatControllerService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getLogs(sender_name: string, receiver_name: string): Promise<string>;
    getMessages(sender: any, receiver: any): Promise<string>;
}
export declare class ChatGatewayService {
    private readonly logger;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined;
    respondToGetFriendsList(user_name: string, io: Server): Promise<void>;
    createMessage(socket_id: any, message: string, target: string): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        targetSocketId: string;
        authorSocketId: string;
        channelId: number;
    }>;
    new_cli(client: any, name: string): Promise<void>;
    sendMessage(io: Server, message: Message): void;
    newMember(client: any, channelName: string): Promise<void>;
    sendTo(io: Server, message: any): Promise<void>;
    sendToChannel(io: Server, channel: string, message: string, socket_id: string): Promise<void>;
}
