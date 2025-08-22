import { Module } from '@nestjs/common';
import { DatabaseConfigService } from './services/database-config.service';
import { LoggingService } from './services/logging.service';

@Module({
  controllers: [],
  providers: [DatabaseConfigService, LoggingService],
  exports: [DatabaseConfigService, LoggingService],
})
export class SharedCommonModule {}
