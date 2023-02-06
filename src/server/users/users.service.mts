import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from 'src/common/register-user.dto.js';
import { User, UserDocument } from './user.schema.js';

@Injectable()
export class UsersService {


    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({name: username}).exec();
    

  }

  async saveOne(registerUserDto: RegisterUserDto): Promise<User> {
    const createdUser = new this.userModel(registerUserDto);
    return createdUser.save();

  }

}