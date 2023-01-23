import 'phaser';
import { io, Socket } from 'socket.io-client';


import { GameConfig } from './game.config.js';

export class Game extends Phaser.Game {

  public socket:Socket;

  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);

    this.socket=io();


  }

  

}

window.addEventListener('load', () => {
  const game = new Game(GameConfig);
  
  game.socket.emit('events', { name: 'Nest' }, (data) => console.log(data));

  
});