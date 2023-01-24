import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import * as fs from "fs";

const filePath = "./db.json"


 

@Injectable()
export class DatabaseService {

    private db:  Low<any>

    constructor() {
        this.init();
       
    }

    private init() {

        try{
            if (!fs.existsSync(filePath)){
                fs.writeFileSync(filePath,JSON.stringify({}))
            }
        
        }catch(error){
            console.error(error)
        }

        const adapter = new JSONFile(filePath);
        this.db = new Low(adapter);

       
        

    }

    public getDb(){
        return this.db;
    }



    public save(){
        this.db.write()
    }


    }