import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import * as fs from "fs";
import { User } from '../models/user.entity.js';
import { Battlefield } from '../models/battlefield.entity.js';

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
                
                var battlefield: {}[] = new Array(256);

                for (var i = 0; i < battlefield.length; i++) {
                    battlefield[i] = {
                        position: i + 1,
                        cardId: undefined,
                        state: undefined
                    }
                }


                fs.writeFileSync(filePath,JSON.stringify({users : [], battlefields : [{ id :1 ,battlefield}]}))


                
            }
        
        }catch(error){
            console.error(error)
        }

        const adapter = new JSONFile(filePath);
        this.db = new Low(adapter);
        this.db.read()


       

       
        

    }

    public getUser(username:string): User{

        const users: User[] = this.db.data.users;
        return users.find(user => user.name === username)
    }

    public saveUser(username:string, password: string): User{

        const user: User = {name : username, password: password};

        this.db.data.users.push(user);

        this.db.write();

        return user;
    }


    public saveMove(cardId:number,battlefieldId:number,position:number){

        var battlefield: Battlefield = new Battlefield();

        var battlefieldJSON = this.db.data.battlefields.find(b => b.id === battlefieldId);

        if(battlefieldJSON != undefined){
            battlefieldJSON.grid.find(g => g.position === position )

        }

    }



    public save(){
        this.db.write()
    }


    }