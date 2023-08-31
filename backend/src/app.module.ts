import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SocketGateway } from './game/socket.gateway';
import { GameService } from './game/game.service';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true,}),
    UserModule, PrismaModule],
  providers: [SocketGateway, GameService],
})
export class AppModule {}