import { Battlefield } from '../objects/battlefield';

export class BattlefieldScene extends Phaser.Scene {

    private battlefield:Battlefield;

    constructor() {
        super({ key: 'battlefield', active: false });
    }

    preload() {
        this.load.image('battlemap', './assets/battlemap.jpg');

        
        this.load.image('card', './assets/card.png')
    }

    create() {

        this.scene.launch('battlefield-ui')
        this.add.image(400, 400, 'battlemap');
        

        // this.input.enable;


        

        this.add.grid(400, 400, 800, 800, 100, 100, undefined, undefined, 0x000000);
        

        this.battlefield = new Battlefield({scene: this, size: 64});
        

        var backButton = this.add.text(50, 50, 'backToWorld')
           // .setOrigin(0, 1)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerup', () => {
                this.scene.switch('WorldMap')
                this.scene.stop('battlefield')
                this.scene.stop('battlefield-ui')
            })
            .on('pointerover', () =>  backButton.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => backButton.setStyle({ fill: '#FFF' }))


        // draggable cards management

        
        var x = 50;
        var y = 750;


        for (var i = 0; i < 5; i++) {
            console.log('i\'m card : ' + i);
            var image = this.add.image(x, y, 'card').setInteractive();
            image.scale = 0.2;

            this.input.setDraggable(image);

            x += 100;

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
           // target.setOrigin(0.5, 0.5)
            gameObject.x = target.x;
            gameObject.y = target.y;
           

        });

      

    }


    update(time: number, delta: number): void {

    }

    
}

