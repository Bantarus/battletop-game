export class BattlefieldUIScene extends Phaser.Scene {



    constructor() {
        super({ key: 'battlefield-ui', active: false });
    }

    preload() {
        // this.load.image('battlefield-cards-zone', './assets/cards-zone-background.jpg');

        

    }




    create() {

        

        //  this.add.image(400, 400, 'battlefield-cards-zone');

            // back to world level button
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
 
 


    }


    update(time: number, delta: number): void {

    }

}