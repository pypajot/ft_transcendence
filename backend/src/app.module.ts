import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MatchHistoryModule } from './match_history/match-history.module';
import { GameModule } from './game/game.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DynamicModule } from '@nestjs/common';

function createAppModule() {
  const commonModule = {
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      ChatModule,
      UserModule,
      AuthModule,
      PrismaModule,
      
    ],
    providers: [
      PrismaService
    ],
  };

  if (process.env.DEV === '1') {
    return commonModule
  } else {
    return {
      ...commonModule,
      imports: [
        // Additional production-specific imports can be added here.
ServeStaticModule.forRoot({
        rootPath: '/app/frontend/dist',
      }),
      ],
    };
  }
}

@Module(createAppModule())
export class AppModule implements OnApplicationBootstrap {
	constructor(private prisma: PrismaService) {}
  
	async onApplicationBootstrap() {
	  try {await this.prisma.user.updateMany({
		data: {
			status: "offline",
		}
	  });
  } catch (e) {}
  }
}
