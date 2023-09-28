import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatchHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getMatchHistory(id: string) {
    return this.prisma.game.findMany({
      where: {
        OR: [
          { winnerId: Number(id)  },
          { loserId: Number(id) },
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
