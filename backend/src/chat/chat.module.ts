import { Module } from '@nestjs/common';
import ChatGateway from './chat.gateway';
import { ChatGatewayService } from './chat.service';
import { ChatController } from './chat.controller';
import { UtilsService } from './utills.service';
import { ChannelService } from './channel.service';
import { ChatControllerService } from './chat.controller.service';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [
        ChatGateway,
        ChatGatewayService,
        ChatControllerService,
        UtilsService,
        ChannelService,
        UserService,
        PrismaService
    ],
    exports: [ChatGatewayService],
    controllers: [ChatController],
})
export class ChatModule {}
