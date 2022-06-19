import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatRequestDto } from './dto/cats.request.dto';
import { Cat } from './cats.schema';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>){}

    async signUp(body : CatRequestDto){
        const { email , name , password} = body;
        const isCatExist = await this.catModel.exists({email});
        if (isCatExist) {
            throw new HttpException('해당하는 고양이는 이미 존재합니다.' , 403);
        }
        // 암호화
        // npm i bcrypt
        // npm i -D @types/bcrypt
        // import * as bcrypt from 'bcrypt';
        const hashedPassword = await bcrypt.hash(password,10);
        const cat = await this.catModel.create({
            email,
            name,
            password: hashedPassword
        });
        
        return cat.readOnlyData;
    }

}
