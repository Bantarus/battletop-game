
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets'
import { Socket } from 'socket.io';
import { Battlefield } from '../../common/battlefield.dto.js';
import { Tile } from '../../common/tile.dto.js';
import { MoveCard } from '../../common/move-card.dto.js';
import { BattlefieldService } from './battlefield.service.mjs';



@WebSocketGateway()
export class BattlefieldGateway {

    constructor(private battlefieldService: BattlefieldService){
      
    }


    @SubscribeMessage('cardMovement')
    handleCardMovement(@MessageBody() data: MoveCard): string {
        console.log("Card mouvement !")

        this.battlefieldService.saveMove(data);

      return "Movement valided !";
    }

    @SubscribeMessage('populateBattlefield')
    handleCreateBattlefield(@MessageBody() data: string): WsResponse<Battlefield>{
      console.log("Populating battlefield ! ")
      const event = 'populateBattlefield';


      var battlefield:Battlefield = this.battlefieldService.getBattlefieldPopulation(1);

      return {event : event, data: battlefield}
      
    }



}