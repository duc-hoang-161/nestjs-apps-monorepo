import { Injectable } from '@nestjs/common';
import { DatabaseConfigService, LoggingService } from 'shared-common';
import { createSuccessResponse, slugify, generateUUID } from 'shared-utils';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseConfigService: DatabaseConfigService,
    private readonly loggingService: LoggingService,
  ) {}

  getData() {
    this.loggingService.log('Getting data from Admin app', 'AppService');
    
    const dbUrl = this.databaseConfigService.getDatabaseUrl();
    
    return createSuccessResponse({
      message: 'Hello Admin Panel',
      databaseUrl: dbUrl.replace(/\/\/.*:.*@/, '//***:***@'), // Hide credentials
      utilities: {
        uuid: generateUUID(),
        slug: slugify('Hello Admin Panel'),
      },
    });
  }
}
