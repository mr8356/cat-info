import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CatRequestDto{
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    @IsString()
    @IsNotEmpty()
    readonly name : string;

    @IsString()
    @IsNotEmpty()
    readonly password : string;
}