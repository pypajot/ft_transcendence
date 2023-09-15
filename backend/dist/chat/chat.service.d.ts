import { Message } from 'src/types/message.entity';
import { Server } from 'socket.io';
import { Client_elem } from 'src/types/client.entity';
import { PrismaClient } from '@prisma/client';
import { channelInfo } from 'src/types/channelInfo.entity';
export declare class ChatControllerService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getFriendsList(user_name: string): Promise<{
        username: string;
        id: number;
        password: string;
        friends: string[];
        socketId: string;
    }[]>;
    getLogs(sender_name: string, receiver_name: string): Promise<string>;
    getMessages(sender: any, receiver: any): Promise<string>;
}
export declare class ChatGatewayService {
    private readonly logger;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findUserById(client_id: string, cli_arr: Client_elem[]): Client_elem | undefined;
    respondToGetFriendsList(socket_id: string, io: Server): Promise<void>;
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
    channelCreation(io: Server, data_chan: channelInfo, client_id: string, client: any): Promise<void>;
    sendTo(io: Server, message: any, socket_id: string): Promise<void>;
    sendToChannel(io: Server, channel: string, message: string, socket_id: string): Promise<void>;
}
