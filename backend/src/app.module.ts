import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GameGateway } from './game/socket.gateway';
import { UserGateway } from './user/user.gateway';
import { GameService } from './game/game.service';
import { MatchmakingService } from './game/matchmaking.service';
import { Socket } from 'socket.io';


@Module({
	imports: [ConfigModule.forRoot(), PrismaModule, AuthModule, UserModule],
	providers: [GameGateway, GameService, MatchmakingService],
})

export class AppModule {}
