import  {IsNotEmpty, IsNumber, IsArray} from 'class-validator';
import { Tile } from './tile.dto';

export class Battlefield {


    constructor(){
        this.tilemap = [];
    }

    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @IsArray()
    tilemap: Tile[];

}