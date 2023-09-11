import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SocketGateway } from './game/socket.gateway';
import { GameService } from './game/game.service';
import { MatchmakingService } from './game/matchmaking.service';
import { Socket } from 'socket.io';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true,}),
    UserModule, PrismaModule],
  providers: [SocketGateway, GameService, MatchmakingService],
})
export class AppModule {}