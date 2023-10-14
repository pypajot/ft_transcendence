import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserGateway]
})
export class UserModule {}

export class AppModule implements OnApplicationBootstrap {
	constructor(private prisma: PrismaService) {}
  
	async onApplicationBootstrap() {
	  await this.prisma.user.updateMany({
		data: {
			status: "offline",
		}
	  });
	}
  }