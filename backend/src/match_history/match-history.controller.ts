import { Controller, Get, UseGuards, Request, Param } from '@nestjs/common';
import { MatchHistoryService } from './match-history.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('profile')
export class MatchHistoryController {
  constructor(private readonly matchHistoryService: MatchHistoryService) {}

  @Get('match-history/:id')
  @UseGuards(JwtAuthGuard)
  async getMatchHistory(@Param() params: any) {
    return this.matchHistoryService.getMatchHistory(params);
  }
}
