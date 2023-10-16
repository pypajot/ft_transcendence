import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MatchHistoryModule } from './match_history/match-history.module';
import { GameModule } from './game/game.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatModule,
    UserModule,
    MatchHistoryModule,
    AuthModule,
    PrismaModule,
    GameModule,
	ServeStaticModule.forRoot({
		rootPath: '/app/frontend/dist',
	}),
  ],
  providers: [
    PrismaService,
  ],
})
export class AppModule {}
