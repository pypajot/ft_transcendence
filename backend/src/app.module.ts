import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SocketGateway } from './game/socket.gateway';
import { GameService } from './game/game.service';
import { MatchmakingService } from './game/matchmaking.service';



@Module({
	imports: [ConfigModule.forRoot(), PrismaModule, AuthModule, UserModule],
	providers: [SocketGateway, GameService, MatchmakingService],
})

export class AppModule {}
