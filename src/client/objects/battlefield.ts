import { CONST } from '../const/const';
import { IBattlefieldConstructor } from "../interfaces/battlefield.interface";
import { Tile } from './tile';

export class Battlefield extends Phaser.GameObjects.Layer {


    private grid: Phaser.GameObjects.Zone[] = [];

    constructor(aParams: IBattlefieldConstructor) {
        super(aParams.scene)
      
        this.init(aParams.tilemap,aParams.size)


    }



    init(tilemap: Tile[], size:number){

        var xCellLocation: number = 0;
        var yCellLocation: number = 0;
        var size = tilemap.length;
        var rangeSize: number = Math.sqrt(size);

       


        var battlefieldWidth: number = CONST.BATTLEFIELD.ZONE.WIDTH * rangeSize;
        var battlefieldHeight: number = CONST.BATTLEFIELD.ZONE.HEIGHT * rangeSize;

        
        var rowIndex = 1;
        var colIndex = 1;

        for (let i = 1; i <= size; i++) {


            let xLocation = CONST.BATTLEFIELD.ZONE.WIDTH  * (colIndex - 1 ) - 1024;
            let yLocation = CONST.BATTLEFIELD.ZONE.HEIGHT * (rowIndex - 1 ) - 1024;


            let zone: Phaser.GameObjects.Zone = new Phaser.GameObjects.Zone(this.scene, xLocation, yLocation, CONST.BATTLEFIELD.ZONE.WIDTH, CONST.BATTLEFIELD.ZONE.HEIGHT)
                .setData('index', i)
                .setOrigin(0,0)
                .setInteractive(undefined,undefined,true)
                .on('pointerup', () => {
                    console.log('i\'m zone ' + zone.getData('index') + ' my location is, x : ' + xLocation + ' and y : ' + yLocation);
                })
                ;



            this.grid.push(zone)
            this.add(zone)
            console.log('i\'m zone ' + i + ' my location is, x : ' + xLocation + ' and y : ' + yLocation)

             colIndex++;
            if(colIndex > 16){
                colIndex = 1;
                rowIndex++;
            } 

           


        }



      
    }

    onClickUp(zone: Phaser.GameObjects.Zone): boolean {
        console.log('i\'m zone ' + zone.getData('index'))
        return true;
    }




}