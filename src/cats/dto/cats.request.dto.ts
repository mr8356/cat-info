import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CatRequestDto{
    @ApiProperty({
        example:"cat1234@naver.com",
        description:"email",
        required:true
    })
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    @ApiProperty({
        example:"blue",
        description:"name",
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly name : string;

    @ApiProperty({
        example:"djfj83h38f",
        description:"password",
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly password : string;
}