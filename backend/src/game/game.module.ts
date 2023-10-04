import { Module } from "@nestjs/common";
import { GameGateway } from "./game.gateway";
import { GameService } from "./game.service";
import { MatchmakingService } from "./matchmaking.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AchievementsService } from "./achievements.service";


@Module({
	providers: [
		GameService,
		GameGateway,
		MatchmakingService,
		PrismaService,
		AchievementsService
	],
})

export class GameModule {}