import  {IsNotEmpty, IsNumber} from 'class-validator';

export class MoveCard {

    
    @IsNotEmpty()
    @IsNumber()
    cardId: number;

    @IsNotEmpty()
    @IsNumber()
    previousBattlemapId: number;

    @IsNotEmpty()
    @IsNumber()
    ToBattlemapId: number;

    @IsNotEmpty()
    @IsNumber()
    previousPosition: number;

    @IsNotEmpty()
    @IsNumber()
    ToPosition: number;
}