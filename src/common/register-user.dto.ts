import  {IsString, IsEmail, IsNotEmpty} from 'class-validator';

export class RegisterUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    password: string;
}