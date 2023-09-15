import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SocketGateway } from './game/socket.gateway';
import { GameService } from './game/game.service';
import { MatchmakingService } from './game/matchmaking.service';

@Module({
  imports: [ConfigModule.forRoot({
	isGlobal: true,
  }), ChatModule, UserModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, GameService, SocketGateway, MatchmakingService],
})

export class AppModule {}
