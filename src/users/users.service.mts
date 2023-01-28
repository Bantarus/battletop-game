import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/common/register-user.dto.js';
import { DatabaseService } from '../database/database.service.mjs';
import { User } from '../models/user.entity.js';



@Injectable()
export class UsersService {


    constructor(private dbService: DatabaseService) {}


  async findOne(username: string): Promise<User | undefined> {
    return this.dbService.getUser(username);

  }

  async saveOne(registeruserDto: RegisterUserDto): Promise<User | undefined> {


    return this.dbService.saveUser(registeruserDto.username, registeruserDto.password);

  }

}