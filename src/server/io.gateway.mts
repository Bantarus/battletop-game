
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Socket } from 'socket.io';
import { MoveCard } from '../common/move-card.dto.js';



@WebSocketGateway()
export class IOGateway {

 

    @SubscribeMessage('connection')
    handleConnection(@MessageBody() data: string, @ConnectedSocket() client: Socket): string {
        console.log("User connected")

      
      return data;
    }

    @SubscribeMessage('disconnect')
    handleDisconnect(@MessageBody() data: string, @ConnectedSocket() client: Socket): string {
        console.log("User disconnected")

      
      return data;
    }
    
    @SubscribeMessage('events')
    handleEvents(@MessageBody() data: string): string {
        console.log("Io event bien reçu !")
      return data;
    }




}