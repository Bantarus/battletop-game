import * as io from 'socket.io';
import { Injectable } from '@nestjs/common';


@Injectable()
export class Server {
  constructor(private socket: io.Socket) {}
  setupSocket() {
    this.socket.on('my event', data => {
      console.log(data);
    });
  }
}