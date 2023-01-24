import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { AppController } from './app.controller.mjs';
import { AppService } from './app.service.mjs';
import { DatabaseService } from '../database/database.service.mjs';
import { IOGateway } from './io.gateway.mjs';





@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService,IOGateway,DatabaseService],
})
export class AppModule {}
