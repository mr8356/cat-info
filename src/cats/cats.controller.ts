import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}


    @Get()
    getCurrentCat(){
        
    }

    // 제목 붙여줌
    @ApiOperation({ summary : '회원가입'})
    @Post()
    async siginUp(@Body() body : CatRequestDto) {
        return await this.catsService.signUp(body);
    }

    
    @Post('login')
    logIn(@Body() body){
        return body;
    }

    @Post('logout')
    logOut(){

    }

    @Post('upload/cats')
    uploadCatImg(){

    }
    

}
