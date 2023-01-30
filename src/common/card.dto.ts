import  {IsNotEmpty, IsNumber, IsArray,IsObject} from 'class-validator';

export class Card {

    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @IsNumber()
    ownerId: number;



    // battle stats to do 

}