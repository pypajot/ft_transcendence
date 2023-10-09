import { Module } from "@nestjs/common";
import { GameGateway } from "./game.gateway";
import { MatchmakingService } from "./matchmaking.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AchievementsService } from "./achievements.service";
import { UserService } from "src/user/user.service";


@Module({
	providers: [
		GameGateway,
		MatchmakingService,
		PrismaService,
		AchievementsService,
		UserService
	],
})

export class GameModule {}