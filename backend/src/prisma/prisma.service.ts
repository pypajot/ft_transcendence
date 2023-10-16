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
		description: 'Win your first game.',
		icon: 'https://i.imgur.com/xx5C3pt.png'
		},
		{
		name: 'Friendly Competitor',
		description: 'Play a game with a friend.',
		icon: 'https://i.imgur.com/U4z1R1R.png'
		},
		{
			name: 'Hat Trick',
			description: 'Win three games in a row.',
			icon: 'https://i.imgur.com/rZlZNa0.png'
		},
		{
			name: 'Underdog victory',
			description: 'Win a game against a player with more wins than you.',
			icon: 'https://i.imgur.com/8ZTru30.png'
		},
		{
			name: 'Hardcore Veteran',
			description: 'Win 5 games in Hardcore mode.',
			icon: 'https://i.imgur.com/icgHkzF.png'
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