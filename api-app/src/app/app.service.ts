import { Injectable } from '@nestjs/common';
import { DatabaseConfigService, LoggingService } from 'shared-common';
import { createSuccessResponse, isValidEmail } from 'shared-utils';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseConfigService: DatabaseConfigService,
    private readonly loggingService: LoggingService,
  ) {}

  getData() {
    this.loggingService.log('Getting data from API app', 'AppService');
    
    const dbConfig = this.databaseConfigService.getConfig();
    
    return createSuccessResponse({
      message: 'Hello API',
      database: {
        host: dbConfig.host,
        port: dbConfig.port,
        database: dbConfig.database,
      },
      emailValidation: {
        'test@example.com': isValidEmail('test@example.com'),
        'invalid-email': isValidEmail('invalid-email'),
      },
    });
  }
}
