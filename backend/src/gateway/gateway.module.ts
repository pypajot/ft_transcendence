import { Module } from '@nestjs/common';
import ChatGateway from '../chat/chat.gateway';
import { ChatGatewayService } from 'src/chat/chat.service';
import { GameGateway } from 'src/game/game.gateway';

@Module({
  providers: [ChatGateway, ChatGatewayService, GameGateway],
})
export class GatewayModule {}
