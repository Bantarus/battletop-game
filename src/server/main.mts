import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module.mjs';
import { join } from 'path';
import { Server } from 'socket.io'
import * as http from 'http'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
 // warning __dirname path end at dist/server output directory
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..','views'));
  app.setViewEngine('hbs');

  const server = app.getHttpServer();
  
  const io = new Server(server)


  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('my event', data => {
      console.log(data);
    });
  });

  await app.listen(3000);

  

}
bootstrap();
