import { CONST } from '../const/const';
import { IBattlefieldConstructor } from "../interfaces/battlefield.interface";

export class Battlefield extends Phaser.GameObjects.Layer {


    private grid: Phaser.GameObjects.Zone[] = [];

    constructor(aParams: IBattlefieldConstructor) {
        super(aParams.scene)

        var xCellLocation: number = 0;
        var yCellLocation: number = 0;
        var rangeSize: number = Math.sqrt(aParams.size);


        var battlefieldWidth: number = CONST.BATTLEFIELD.ZONE.WIDTH * rangeSize;
        var battlefieldHeight: number = CONST.BATTLEFIELD.ZONE.HEIGHT * rangeSize;



        for (let i = 1; i <= aParams.size; i++) {

            let xLocation = (CONST.BATTLEFIELD.ZONE.WIDTH  * ((i - 1) % rangeSize + 1) ) - CONST.BATTLEFIELD.ZONE.WIDTH / 2;
            let yLocation = (battlefieldHeight - CONST.BATTLEFIELD.ZONE.HEIGHT  * (Math.floor((i - 1) / rangeSize))) - (CONST.BATTLEFIELD.ZONE.HEIGHT / 2 );



            let zone: Phaser.GameObjects.Zone = new Phaser.GameObjects.Zone(this.scene, xLocation, yLocation, CONST.BATTLEFIELD.ZONE.WIDTH, CONST.BATTLEFIELD.ZONE.HEIGHT)
                .setData('index', i)
                .setInteractive(undefined,undefined,true)
                .on('pointerup', () => {
                    console.log('i\'m zone ' + zone.getData('index') + ' my location is, x : ' + xLocation + ' and y : ' + yLocation);
                })
                ;



            this.grid.push(zone)
            this.add(zone)


        }





    }





    onClickUp(zone: Phaser.GameObjects.Zone): boolean {
        console.log('i\'m zone ' + zone.getData('index'))
        return true;
    }


}