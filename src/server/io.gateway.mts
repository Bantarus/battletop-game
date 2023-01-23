
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'


@WebSocketGateway()
export class IOGateway {

    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): string {
        console.log("Io event bien reçu !")
      return data;
    }

}