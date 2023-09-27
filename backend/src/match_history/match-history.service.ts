import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatchHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getMatchHistory(username: string) {
    return this.prisma.game.findMany({
      where: {
        OR: [
          { winner: { username } },
          { loser: { username } },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
      include: {
        winner: true,
        loser: true,
      },
    });
  }
}
