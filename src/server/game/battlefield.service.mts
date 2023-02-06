import { Injectable } from '@nestjs/common';
import { Tile } from '../../common/tile.dto.js';
import { Battlefield } from '../../common/battlefield.dto.js';
import { Card } from '../../common/card.dto.js';
import { MoveCard } from '../../common/move-card.dto.js';
import { DatabaseService } from '../database/database.service.mjs';

@Injectable()
export class BattlefieldService {

  constructor(private dbService: DatabaseService) { }


  async saveMove(cardMovement: MoveCard): Promise<any | undefined> {


    // check if move is valid afterward: todo

    //broadcast movement to room

    this.dbService.saveMove(cardMovement.cardId, cardMovement.ToBattlemapId,cardMovement.fromPosition, cardMovement.ToPosition);

    return "done";

  }


  getBattlefieldPopulation(battlefieldId:number) : Battlefield{

    var battlefield:Battlefield = new Battlefield();

    battlefield.id=battlefieldId;

    var population = this.dbService.getBattlefieldPopulation(battlefieldId);

    for (var i =0; i< population.length;i++){

      let tile:Tile = new Tile();
      tile.position=population[i].position;

      battlefield.tilemap.push(tile);

      if(population[i].cardId != undefined){

        let card:Card = new Card();
        card.id = population[i].cardId;
        battlefield.tilemap[i].card = card;
      }

      
      
     
      
    }


    return battlefield

  }




}
