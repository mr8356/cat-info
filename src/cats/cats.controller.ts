import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Get()
    getCurrentCat(){
        
    }

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
