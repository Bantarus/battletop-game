export interface ICardConstructor {
    scene: Phaser.Scene;
    x: number;
    y: number;
    texture: string;
    id: number;
    ownerId: number;
    frame?: string | number;
}