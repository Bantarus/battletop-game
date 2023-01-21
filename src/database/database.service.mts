import { Injectable } from '@nestjs/common';
import * as lowdb from 'lowdb'
import { Memory, MemorySync } from 'lowdb'


@Injectable()
export class DatabaseService {

    private db: lowdb.LowSync<any>


    constructor() {
        this.init();
    }

    private init() {
        const adapter = new MemorySync();
        this.db = new lowdb.LowSync(adapter);

        this.db.data = { users: [] }
        

    }

    public getDb(){
        return this.db;
    }


    }