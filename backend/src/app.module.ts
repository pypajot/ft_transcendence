import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import ChatGateway from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ConfigModule.forRoot({
	isGlobal: true,
  }), ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
