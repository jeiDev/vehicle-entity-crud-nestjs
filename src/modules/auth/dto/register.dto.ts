import { IsNotEmpty, IsString } from "class-validator";
import { LoginDto } from "./login.dto";

export class RegisterDto extends LoginDto{
    
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

}