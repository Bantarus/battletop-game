import * as io from 'socket.io-client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  private socket;
  
  constructor() {
    this.socket = io.io('http://localhost:3000');
  }
  
  emitEvent(event: string, data: any) {
    this.socket.emit(event, data);
  }
}