import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';

import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

@Module({
  imports : [MongooseModule.forFeature([{
    name: Cat.name, schema: CatSchema
  }])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
