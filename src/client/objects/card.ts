import { ICardConstructor } from "../interfaces/card.interface";

export class Battlefield extends Phaser.GameObjects.Image {

    constructor(aParams: ICardConstructor) {
        super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame)

        
    }


    

}