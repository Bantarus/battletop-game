import { WorldMapScene } from './scenes/world-map-scene.js';
import { BattlefieldScene } from './scenes/battlefield-scene.mjs';
import { BattlefieldUIScene} from './scenes/battlefield-ui-scene.js';

//import Phaser from "phaser";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'TableTop',
  version: '2.0',
  width: 800,
  height: 800,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [WorldMapScene, BattlefieldScene,BattlefieldUIScene],
  input: {
    keyboard: true,
    mouse: true,
    touch: false,

    gamepad: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  
  //backgroundColor: '#000000',
  //render: { pixelArt: false, antialias: true }

 
}; 

function create(){
}