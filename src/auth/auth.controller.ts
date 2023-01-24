import { Controller, Request, Post, UseGuards, Get, Render  } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard.js';

@Controller('auth')
export class AuthController {


    @Get()
    root() {
        return { message: "Hello from auth" };
    }


    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return req.user;
    }
  

}
