import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PrivMsgLogsDto } from 'src/dto';
import { ChatControllerService } from './chat.controller.service';

export interface Message {
    content: string;
    author: string;
    createAt: Date;
    inChannel: boolean;
    channel: string;
}

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatControllerService) {}

    @Post('getMessageSent')
    async getLogsSender(@Body() dto: PrivMsgLogsDto): Promise<string> {
        if (dto.isUser) {
            return await this.chatService.getLogsUserToUser(dto.sender, dto.receiver);
        } else {
            return await this.chatService.getLogsUserToChannel(
                dto.sender,
                dto.receiver
            );
        }
    }
    @Post('getMessageReceived')
    async getLogsReceiver(@Body() dto: PrivMsgLogsDto): Promise<string> {
        if (dto.isUser) {
            return await this.chatService.getLogsUserToUser(dto.sender, dto.receiver);
        } else {
            return await this.chatService.getChannelLogsToUser(
                dto.sender,
                dto.receiver
            );
        }
    }
    @Get('getFriendsList')
    getFriends(@Query('username') username: any) {
        return this.chatService.getFriendsList(username);
    }
}
