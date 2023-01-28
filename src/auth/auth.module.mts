import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.mjs';
import { UsersModule } from '../users/users.module.mjs';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy.mjs';
import { AuthController } from './auth.controller.mjs';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
