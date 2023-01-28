import { Module } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.mjs';
import { UsersService } from './users.service.mjs';

@Module({
  providers: [UsersService,DatabaseService],
  exports: [UsersService],
})
export class UsersModule {}