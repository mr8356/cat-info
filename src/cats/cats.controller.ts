import { Body, Controller, Get, Post, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';;
import { Request } from 'express';
import { Cat } from './cats.schema';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.options';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService,
        private readonly authService: AuthService,
        ){}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    getCurrentCat(@CurrentUser() cat){
        return cat;
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

    @ApiOperation({ summary : '고양이 이미지 업로드'})
    @UseInterceptors(FilesInterceptor('image',10 ,multerOptions('cats'))) //multerOptions('cats') 
    @UseGuards(JwtAuthGuard) // 토큰이 필요함
    @Post('upload')
    uploadCatImg(@UploadedFiles() files : Express.Multer.File[] , @CurrentUser() cat:Cat){
        // return {image : `http://localhost:3000/media/cats/${files[0].filename}` };
        return this.catsService.uploadImg(cat , files);
    }
    

}
