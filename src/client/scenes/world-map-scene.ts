export class WorldMapScene extends Phaser.Scene{

    constructor(){
        super({key: 'WorldMap', active :true});
    }

    preload() {
        this.load.image('worldmap', './assets/worldmap.png');
    }

    create ()
    {
        this.add.image(400, 400, 'worldmap');
        
       // this.input.enable;
       

        this.add.grid(400,400,800,800,100,100, undefined,undefined, 0x000000)
        .setInteractive()
        .on('pointerup', ()=>{
            this.scene.switch('battlefield');
            
        });
        
        
    }


    update(time: number, delta: number): void {
        
    }

    

    
}

