import  {IsNotEmpty, IsNumber,IsObject, IsEnum} from 'class-validator';
import { Card } from './card.dto';
import { CaseStates } from './const';

export class Tile {

    @IsNotEmpty()
    @IsNumber()
    position: number;
  
    @IsNotEmpty()
    @IsEnum(CaseStates)
    state: CaseStates;

      
    @IsObject()
    card: Card;


}