import { Module } from '@nestjs/common';
import { MatchHistoryController } from './match-history.controller';
import { MatchHistoryService } from './match-history.service';

@Module({
  controllers: [MatchHistoryController],
  providers: [MatchHistoryService]
})
export class MatchHistoryModule {}

