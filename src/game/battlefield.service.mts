import { Injectable } from '@nestjs/common';
import { MoveCard } from 'src/common/move-card.dto.js';
import { DatabaseService } from 'src/database/database.service.mjs';

@Injectable()
export class BattlefieldService {

  constructor(private dbService: DatabaseService) {}

  getHello(): string {
    return "Hello World 2";
  }

  async saveMove(cardMovement: MoveCard): Promise<any | undefined> {


    this.dbService.saveMove(cardMovement.cardId, cardMovement.ToBattlemapId,cardMovement.ToPosition);

    return "done";

  }

}
