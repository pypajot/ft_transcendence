import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { MatchHistoryService } from './match_history.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class MatchHistoryController {
  constructor(private readonly matchHistoryService: MatchHistoryService) {}

  @Get('match-history')
  @UseGuards(JwtAuthGuard)
  async getMatchHistory(@Request() req) {
    const user = req.user;
    return this.matchHistoryService.getMatchHistory(user.username);
  }
}
