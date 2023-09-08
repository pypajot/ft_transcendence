import { ChatService } from "./chat.service";
export interface Message {
    content: String;
    author: String;
    createAt: Date;
    inChannel: boolean;
    channel: String;
}
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatService);
    getlogs(): any;
}
