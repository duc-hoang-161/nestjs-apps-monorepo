import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedCommonModule } from 'shared-common';

@Module({
  imports: [SharedCommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
