import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ChatControllerService } from './chat.service';
import { PrismaClient } from '@prisma/client';
import { PrivMsgLogsDto } from 'src/dto';

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
        console.log(dto);
        if (dto.isUser) {
            return this.chatService.getLogsUserToUser(dto.sender, dto.receiver);
        } else {
            console.log(
                await this.chatService.getLogsUserToChannel(
                    dto.sender,
                    dto.receiver
                )
            );
            return this.chatService.getLogsUserToChannel(
                dto.sender,
                dto.receiver
            );
        }
    }
    @Post('getMessageReceived')
    getLogsReceiver(@Body() dto: PrivMsgLogsDto): Promise<string> {
        console.log(dto);
        if (dto.isUser) {
            return this.chatService.getLogsUserToUser(dto.sender, dto.receiver);
        } else {
            return this.chatService.getChannelLogsToUser(
                dto.sender,
                dto.receiver
            );
        }
    }
    @Get('getFriendsList')
    getFriends(@Query('username') username: any) {
        console.log('username: ', username);
        return this.chatService.getFriendsList(username);
    }
}
