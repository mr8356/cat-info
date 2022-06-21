import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatRequestDto } from './dto/cats.request.dto';
import { Cat } from './cats.schema';
import * as bcrypt from 'bcrypt';
import { CatsRepository } from './cats.repository';


@Injectable()
export class CatsService {
    constructor(private readonly catsRespository: CatsRepository){}

    async signUp(body : CatRequestDto){
        const { email , name , password} = body;
        const isCatExist = await this.catsRespository.existByEmail(email);
        if (isCatExist) {
            throw new HttpException('해당하는 고양이는 이미 존재합니다.' , 403);
        }
        
        // 암호화
        // npm i bcrypt
        // npm i -D @types/bcrypt
        // import * as bcrypt from 'bcrypt';
        const hashedPassword = await bcrypt.hash(password,10);

        const cat = await this.catsRespository.create({
            email,
            name,
            password: hashedPassword
        });
        return cat.readOnlyData;
    }

    async getAll() {
        const allCat = await this.catsRespository.findAll();
        const readOnlyCats = allCat.map((cat) => cat.readOnlyData);
        return readOnlyCats;
    }

    async uploadImg(cat : Cat , files : Express.Multer.File[]){
        const filename = `cats/${files[0].filename}`;
        console.log(filename);
        const newCat = await this.catsRespository.findCatByIdAndUpadteImg(
            cat.id,
            filename
        )
        // console.log(newCat);
        return newCat.imgUrl;
    }

}
