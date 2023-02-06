import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from '../database/database.service.mjs';
import { User, UserSchema } from './user.schema.js';
import { UsersService } from './users.service.mjs';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UsersService,DatabaseService],
  exports: [UsersService,MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
})
export class UsersModule {}