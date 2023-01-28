export class WorldMapScene extends Phaser.Scene{

    constructor(){
        super({key: 'WorldMap', active :true});
    }

    preload() {
        this.load.image('worldmap', './assets/worldmap.png');
    }

    create ()
    {


       

        this.add.image(400, 400, 'worldmap')
        .setInteractive()
        .on('pointerup', ()=>{
            this.scene.switch('battlefield');
            
        });
        
  
     //   this.add.grid(400,400,800,800,100,100, undefined,undefined, 0x000000)
       
        
        
    }


    update(time: number, delta: number): void {
        
    }

    

    
}

