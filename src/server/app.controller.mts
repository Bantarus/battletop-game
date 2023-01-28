import { Controller, Get, Render } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service.mjs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root(){
    return { message: this.appService.getHello() };
  }
  
  @Get('game')
  @Render('game')
  game(){
    return { message: this.appService.getHello() }
  }

 


}
