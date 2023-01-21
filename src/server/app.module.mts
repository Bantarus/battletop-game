import { Module } from '@nestjs/common';
import { AppController } from './app.controller.mjs';
import { AppService } from './app.service.mjs';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ClientService } from './client.service.mjs';
import { ClientController } from './client.controller.mjs';
import { DatabaseService } from '../database/database.service.mjs';





@Module({
  imports: [],
  controllers: [AppController, ClientController],
  providers: [AppService,ClientService,DatabaseService],
})
export class AppModule {}
