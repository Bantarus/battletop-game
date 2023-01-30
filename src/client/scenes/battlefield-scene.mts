
import { Socket } from 'socket.io-client';
import { MoveCard } from 'src/common/move-card.dto.js';
import { socket } from '../game.mjs';
import { Battlefield } from '../objects/battlefield.js';
import { Tile } from '../objects/tile.js';
import { Battlefield as BattlefieldDto } from '../../common/battlefield.dto.js';

export class BattlefieldScene extends Phaser.Scene {

    private battlefield:Battlefield;

    private frameTime:number;


    constructor() {
        super({ key: 'battlefield', active: false });



    }

    preload() {
        this.load.image('battlemap', './assets/battlemap.jpg');

        
        this.load.image('card-1', './assets/card-1.png')
        this.load.image('card-2', './assets/card-2.png')
        this.load.image('card-3', './assets/card-3.png')
        this.load.image('card-4', './assets/card-4.png')
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
        

        // create empty battlemap at first (before populating the battlefield)
        this.add.grid(0, 0, 2048, 2048, 128, 128, undefined, undefined, 0x000000);

        var battlefield: Tile[] = new Array(256);

                for (var i = 0; i < battlefield.length; i++) {
                    battlefield[i] = new Tile({scene : this, x : 0, y : 0, width: 0, height : 0, position : 0});
                }
        



        this.battlefield = new Battlefield({scene: this, size: 256, tilemap: battlefield});
        

      
        
        // tilemap and grid

        // get battlefield state from server at creation to populate it

        socket.emit('populateBattlefield', {name:'createBattlefield'}, (data:BattlefieldDto) => {console.log(data)});

        // on server response update full battlefield state (at creation only)
        // then we do delta update.

        socket.on('populateBattlefield', (data:BattlefieldDto) => {
            console.log(data)

            for (var i = 0; i < data.tilemap.length; i++){

                let tile = data.tilemap[i]

                if(tile.card != undefined){

                    console.log('i\'m card : ' + tile.card.id);
                    
                    let zone = this.battlefield.grid[tile.position-1]

                    let x = zone.x + 64;
                    let y = zone.y + 64;
        
                    var image = this.add.image(x, y, 'card-' + tile.card.id).setInteractive().setData({'id': tile.card.id,'position' : tile.position});
                   // image.scale = 0.2;
        
                    this.input.setDraggable(image);


                }

               

            }
        
        });

      

       
        // draggable cards events management

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
           
            socket.emit('cardMovement', {
                cardId: gameObject.getData('id')
                , previousBattlemapId: 1
                , ToBattlemapId: 1
                , fromPosition: gameObject.getData('position')
                , ToPosition: target.getData('index')
            });


        });


       

    }


    update(time: number, delta: number): void {

        this.frameTime += delta;
    

        

    }

    
}

