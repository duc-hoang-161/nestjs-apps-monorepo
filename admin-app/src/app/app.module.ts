import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedCommonModule } from 'shared-common';
import { SharedUtilsModule } from 'shared-utils';

@Module({
  imports: [SharedCommonModule, SharedUtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
