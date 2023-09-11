import { Body, Controller, Get, Post } from "@nestjs/common";
import { ChatControllerService } from "./chat.service";
import { PrismaClient } from "@prisma/client";
import { PrivMsgLogsDto } from "src/dto";

export interface Message {
    content: String,
    author: String,
    createAt: Date,
    inChannel: boolean,
    channel: String
}

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatControllerService){}

    @Post('getMessageSent')
    getLogsSender(@Body() dto: PrivMsgLogsDto ): any {
        return this.chatService.getLogs(dto.sender, dto.receiver);
    }
    @Post('getMessageReceived')
    getLogsReceiver(@Body() dto: PrivMsgLogsDto): any{
        return (this.chatService.getLogs(dto.sender, dto.receiver))
    }
}