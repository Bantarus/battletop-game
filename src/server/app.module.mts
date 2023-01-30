import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.mjs';
import { AppController } from './app.controller.mjs';
import { AppService } from './app.service.mjs';
import { DatabaseService } from '../database/database.service.mjs';
import { IOGateway } from './io.gateway.mjs';
import { BattlefieldGateway } from './game/battlefield.gateway.mjs';
import { BattlefieldService } from './game/battlefield.service.mjs';





@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService,IOGateway,DatabaseService,BattlefieldGateway,BattlefieldService],
})
export class AppModule {}
