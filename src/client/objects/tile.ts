import { ITileConstructor } from "../interfaces/tile.interface";

export class Tile extends Phaser.GameObjects.Zone {

    constructor(aParams: ITileConstructor) {
        super(aParams.scene, aParams.x, aParams.y, aParams.width, aParams.height)

    }


    

}