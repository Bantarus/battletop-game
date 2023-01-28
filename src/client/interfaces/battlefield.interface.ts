import { Tile } from "../objects/tile";

export interface IBattlefieldConstructor {
    scene: Phaser.Scene;
    size: number;
    tilemap: Tile[]

  }