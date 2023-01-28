
import { Socket } from 'socket.io-client';
import { MoveCard } from 'src/common/move-card.dto.js';
import { socket } from '../game.mjs';
import { Battlefield } from '../objects/battlefield.js';
import { Tile } from '../objects/tile.js';

export class BattlefieldScene extends Phaser.Scene {

    private battlefield:Battlefield;

    private frameTime:number;


    constructor() {
        super({ key: 'battlefield', active: false });



    }

    preload() {
        this.load.image('battlemap', './assets/battlemap.jpg');

        
        this.load.image('card', './assets/card-1.png')
    }

    create() {


        // activate ui scene first 

        this.scene.launch('battlefield-ui')

    

        var camera = this.cameras.main;
        camera.setBounds(-1024,-1024,2048,2048);

        
        this.add.image(0, 0, 'battlemap')
        .setInteractive()
         // event listener to move the camera throught the map
            .on("pointermove", function (pointer) {

                if (pointer.leftButtonDown()) {
                    console.log("Moving with pointer down !")

                    camera.scrollX -= (pointer.x - pointer.prevPosition.x) / camera.zoom;
                    camera.scrollY -= (pointer.y - pointer.prevPosition.y) / camera.zoom;

                }

            })
        ;
        

      
        
        // tilemap and grid

        this.add.grid(0, 0, 2048, 2048, 128, 128, undefined, undefined, 0x000000);

        var battlefield: Tile[] = new Array(256);

                for (var i = 0; i < battlefield.length; i++) {
                    battlefield[i] = new Tile({scene : this, x : 0, y : 0, width: 0, height : 0, position : 0});
                }
        

        this.battlefield = new Battlefield({scene: this, size: 256, tilemap: battlefield});
        

        // draggable cards management

        
        var x = 64;
        var y = 750;


        for (var i = 0; i < 5; i++) {
            console.log('i\'m card : ' + i);
            var image = this.add.image(x, y, 'card').setInteractive();
           // image.scale = 0.2;

            this.input.setDraggable(image);

            x += 128;

        }

        this.input.on('dragstart', function (pointer, gameObject) {
            console.log('dragged !');
            this.children.bringToTop(gameObject);
    
        }, this);
     

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            
            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        

        this.input.on('dragend', function (pointer, gameObject, dropped) {

            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
          

        });

      
        this.input.on('drop', function (pointer, gameObject, target) {

            console.log('dropped !');
            // since zone are created with origins  set to 1, we set back to 0.5
            //target.setOrigin(0.5, 0.5)
            gameObject.x = target.x + 64;

            gameObject.y = target.y + 64;
            console.log('i\'m dropzone ' + target.getData('index') + ' my location is, x : ' + target.x + ' and y : ' + target.y)
           
            socket.emit('cardMovement',{cardId : 1,previousBattlemapId : 1, ToBattlemapId:1, previousPosition: 1,ToPosition: 1});
            

        });


       

    }


    update(time: number, delta: number): void {

        this.frameTime += delta;
    

        

    }

    
}

