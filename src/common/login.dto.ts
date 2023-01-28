import  {IsString, IsEmail, IsNotEmpty} from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}