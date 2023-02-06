import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/common/register-user.dto.js';
import { UsersService } from '../server/users/users.service.mjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }


  async registerUser(registerUserDto: RegisterUserDto): Promise<any>{

    const user = await this.usersService.saveOne(registerUserDto);

    return user;
  }



}