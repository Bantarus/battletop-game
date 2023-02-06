import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.mjs';
import { AppController } from './app.controller.mjs';
import { AppService } from './app.service.mjs';
import { DatabaseService } from './database/database.service.mjs';
import { IOGateway } from './io.gateway.mjs';
import { BattlefieldGateway } from './game/battlefield.gateway.mjs';
import { BattlefieldService } from './game/battlefield.service.mjs';
import { MongooseModule } from '@nestjs/mongoose';





@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/test')],
  controllers: [AppController],
  providers: [AppService,IOGateway,DatabaseService,BattlefieldGateway,BattlefieldService],
})
export class AppModule {}
