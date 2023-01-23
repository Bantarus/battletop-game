import { Module } from '@nestjs/common';
import { AppController } from './app.controller.mjs';
import { AppService } from './app.service.mjs';
//import { ClientController } from './client.controller.mjs';
import { DatabaseService } from '../database/database.service.mjs';
import { IOGateway } from './io.gateway.mjs';





@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,IOGateway,DatabaseService],
})
export class AppModule {}
