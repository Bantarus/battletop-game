import { IRegionConstructor } from "../interfaces/region.interface";

export class Battlefield extends Phaser.GameObjects.Zone {

    constructor(aParams: IRegionConstructor) {
        super(aParams.scene, aParams.x, aParams.y, aParams.width, aParams.height)

    }


    

}