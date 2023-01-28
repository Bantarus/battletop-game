import { IInventoryConstructor } from "../interfaces/inventory.interface";

export class Inventory extends Phaser.GameObjects.Layer {


    constructor(aParams: IInventoryConstructor) {
        super(aParams.scene)

    }


}