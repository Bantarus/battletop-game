import { Controller, Request, Post, UseGuards, Get, Render, Body } from '@nestjs/common';
import { RegisterUserDto } from '../common/register-user.dto.js';
import { AuthService } from './auth.service.mjs';
import { LocalAuthGuard } from './local-auth.guard.js';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  root() {
    return { message: "Hello from auth" };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async register(@Request() req) {
    return req.user;
  }


  @Post('register')
  async login(@Body() registeruserDto: RegisterUserDto) {

    const user = this.authService.registerUser(registeruserDto);

    return 'user registred';
  }







}
