import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AccountDto {
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

}