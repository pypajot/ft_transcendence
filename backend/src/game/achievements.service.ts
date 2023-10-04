import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


// The achievements are : 

// First Blood: Win your first game
// Friendly Competitor: Play a game with a friend
// Hat Trick: Win three games in a row
// Underdog Victory: Win a game against a player with more wins than you
// Hardcore Veteran: Win 5 games in Hardcore mode

@Injectable()
export class AchievementsService {

	constructor(private prisma: PrismaService) {}

    async awardAchievement(userId: number, achievementName: string) {
        console.log(`Awarding ${achievementName} to ${userId}`);
        const achievement = await this.prisma.achievement.findUnique({ where: { name: achievementName } });
        if (achievement) {
            const existingUserAchievement = await this.prisma.userAchievement.findFirst({
                where: {
                    userId,
                    achievementId: achievement.id
                }
            });

            if (!existingUserAchievement) {
                await this.prisma.userAchievement.create({
                    data: {
                        userId,
                        achievementId: achievement.id,
                    },
                });
            } 
			else {
                console.log(`User ${userId} already has the ${achievementName} achievement.`);
            }
        }
    }

	async checkAllAchievements(userId: number, opponentId: number) {
		await this.checkFirstBlood(userId);
		await this.checkFriendlyCompetitor(userId, opponentId);
		await this.checkHatTrick(userId);
		await this.checkUnderdogVictory(userId, opponentId);
		await this.checkHardcoreVeteran(userId);
	}

	async checkFirstBlood(userId: number) {
		const user = await this.prisma.user.findUnique({ where: { id: userId }, include: { gamesWon: true } });
		if (user.gamesWon.length === 1) {
		  await this.awardAchievement(userId, 'First Blood');
		}
	}

	async checkFriendlyCompetitor(userId: number, opponentId: number) {
		const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { friends: true } });
		if (user.friends.includes(opponentId)) {
			await this.awardAchievement(userId, 'Friendly Competitor');
		}
	}

	async checkHatTrick(userId: number) {
		const recentGames = await this.prisma.game.findMany({
		  where: {
			OR: [
			  { winnerId: userId },
			  { loserId: userId }
			]
		  },
		  orderBy: {
			createdAt: 'desc'
		  },
		  take: 3
		});
	
		if (recentGames.length === 3 && recentGames.every(game => game.winnerId === userId)) {
		  await this.awardAchievement(userId, 'Hat Trick');
		}
	}

	async checkUnderdogVictory(winnerId: number, loserId: number) {
		const [winner, loser] = await this.prisma.user.findMany({
			where: {
			id: {
				in: [winnerId, loserId]
			}
			},
			select: {
			id: true,
			wins: true
			}
		});

		if (winner.wins < loser.wins) {
			await this.awardAchievement(winnerId, 'Underdog Victory');
		}
	}

	async checkHardcoreVeteran(userId: number) {
		const hardcoreWins = await this.prisma.game.count({
		  where: {
			winnerId: userId,
			mode: 'Hardcore'
		  }
		});
	
		if (hardcoreWins >= 5) {
		  await this.awardAchievement(userId, 'Hardcore Veteran');
		}
	  }

}