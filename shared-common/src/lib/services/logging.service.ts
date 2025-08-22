import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggingService {
  private readonly logger = new Logger(LoggingService.name);

  log(message: string, context?: string): void {
    this.logger.log(message, context || 'Application');
  }

  error(message: string, trace?: string, context?: string): void {
    this.logger.error(message, trace, context || 'Application');
  }

  warn(message: string, context?: string): void {
    this.logger.warn(message, context || 'Application');
  }

  debug(message: string, context?: string): void {
    this.logger.debug(message, context || 'Application');
  }

  verbose(message: string, context?: string): void {
    this.logger.verbose(message, context || 'Application');
  }
}