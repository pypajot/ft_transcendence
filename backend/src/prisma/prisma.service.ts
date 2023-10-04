import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
	constructor() {
		super({
			datasources: {
				db: {
					url: process.env.DATABASE_URL,
				},
			},
		});
	}

	async onModuleInit() {
		await this.$connect();
		await this.seedAchievements();
	  }
	
	  async onModuleDestroy() {
		await this.$disconnect();
	  }

	private async seedAchievements() {
	const achievements = [
		{
		name: 'First Blood',
		description: 'Win your first game.'
		},
		{
		name: 'Friendly Competitor',
		description: 'Play a game with a friend.'
		},
		{
			name: 'Hat Trick',
			description: 'Win three games in a row.'
		},
		{
			name: 'Underdog victory',
			description: 'Win a game against a player with more wins than you.'
		},
		{
			name: 'Hardcore Veteran',
			description: 'Win 5 games in Hardcore mode.'
		}
	];

	for (let achievement of achievements) {
		// Checking if the achievement already exists before creating it
		const existingAchievement = await this.achievement.findUnique({
		where: { name: achievement.name },
		});
		if (!existingAchievement) {
		await this.achievement.create({
			data: achievement
		});
		}
	}
	}
}