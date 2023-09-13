import { ChatControllerService } from "./chat.service";
import { PrivMsgLogsDto } from "src/dto";
export interface Message {
    content: String;
    author: String;
    createAt: Date;
    inChannel: boolean;
    channel: String;
}
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatControllerService);
    getLogsSender(dto: PrivMsgLogsDto): any;
    getLogsReceiver(dto: PrivMsgLogsDto): any;
    getFriends(username: any): Promise<{
        username: string;
        id: number;
        password: string;
        friends: string[];
        socketId: string;
    }[]>;
}
