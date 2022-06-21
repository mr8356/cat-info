import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';;
import { Request } from 'express';
import { Cat } from './cats.schema';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService,
        private readonly authService: AuthService,
        ){}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    getCurrentCat(@Req() req : Request){
        return req.user;
    }

    @Get('all')
    async getAll(){
        return this.catsService.getAll();
    }


    // 제목 붙여줌
    @ApiOperation({ summary : '회원가입'})
    @Post()
    async siginUp(@Body() body : CatRequestDto) {
        return await this.catsService.signUp(body);
    }

    
    @Post('login')
    logIn(@Body() body:LoginRequestDto){
        return this.authService.jwtLogIn(body);
    }

    @Post('logout')
    logOut(){

    }

    @Post('upload')
    uploadCatImg(){

    }
    

}
