import 'phaser';
import { io, Socket } from 'socket.io-client';
import { GameConfig } from './game.config.mjs';


export const socket:Socket = io();

export class Game extends Phaser.Game {


  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);

    

  }

  

}

window.addEventListener('load', () => {
  
  const game = new Game(GameConfig);
  
  socket.emit('events', { name: 'Nest' }, (data) => console.log(data));

  
});