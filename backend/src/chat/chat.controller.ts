import { Controller } from "@nestjs/common";
import { ChatService } from "./chat.service";

export interface Message {
    content: String,
    author: String,
    createAt: Date,
    inChannel: boolean,
    channel: String
}

@Controller('messagesLogs')
export class ChatController {
    constructor(private chatService: ChatService){}

    @Get('getLogs')
    getlogs(): any {
        return ;
    }
}