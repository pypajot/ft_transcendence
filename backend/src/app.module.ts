import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';
import { SocketGateway } from './game/socket.gateway';
import { GameService } from './game/game.service';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true,}),
    AuthModule, UserModule, BookmarkModule,  PrismaModule],
  providers: [SocketGateway, GameService],
})
export class AppModule {}