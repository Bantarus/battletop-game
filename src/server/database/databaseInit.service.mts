import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import * as fs from "fs";
import { Connection, Model } from 'mongoose';
import { Battlefield, BattlefieldDocument } from '../game/battlefield.schema.js';

const filePath = "./db.json"




@Injectable()
export class DatabaseInitService {


    constructor(@InjectModel(Battlefield.name) private battlefieldModel: Model<BattlefieldDocument>) {
        this.init();

    }

    private init() {

        

            this.battlefieldModel.find().exec().then((data) => {
                var battlefields: Battlefield[] = data;


                if ( battlefields == undefined || battlefields.length == 0) {

                    var grid = new Array<number>(256);

                    for (var i = 0; i < battlefields.length; i++) {

                        grid[i] = 0;



                    }

                    const battlefield = new this.battlefieldModel({name:'B1',tilesCount: 256, grid : grid, imageId:1 })


                    battlefield.save();




                }




            }).catch(error => { console.error(error) });



    }

}