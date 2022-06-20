import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat } from "./cats.schema";
import { CatRequestDto } from "./dto/cats.request.dto";


@Injectable()
export class CatsRepository{
    constructor(@InjectModel(Cat.name) private readonly catModel : Model<Cat>){}
    
    async existByEmail(email:string): Promise<boolean>{
        var result;
        try {
            result = await this.catModel.exists({email});
        } catch (error) {
            throw new HttpException('db error' , 400);
        }
        return result;
    }
    
    async findCatByEmail(email:string):Promise<Cat>{
        var result;
        try {
            result = await this.catModel.findOne({email});
        } catch (error) {
            throw new HttpException('db error' , 400);
        }
        return result;
    }

    // async isPasswordValidated()

    async create(cat: CatRequestDto):Promise<Cat>{
        return await this.catModel.create(cat);
    }

    async findCatByIdWithoutPassword(catId: string): Promise<Cat|null>{
        const cat = await this.catModel.findById(catId).select('-password');
        return cat;
    }
}