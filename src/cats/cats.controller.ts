import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Get()
    getCurrentCat(){
        
    }

    @Post()
    async siginUp() {
        
    }

    @Post('login')
    logIn(){

    }

    @Post('logout')
    logOut(){

    }

    @Post('upload/cats')
    uploadCatImg(){

    }
    

}
