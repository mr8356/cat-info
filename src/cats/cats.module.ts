import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express/multer';
import { AuthModule } from 'src/auth/auth.module';
import { CatsController } from './cats.controller';
import { CatsRepository } from './cats.repository';

import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

// 서로 참조할때 순환모듈
@Module({
  imports : [
    MongooseModule.forFeature([{name: Cat.name, schema: CatSchema}]),
    // forwardRef(()=> AuthModule),
    AuthModule,
    MulterModule.register({
      dest: './upload',
    }),
    
],
  controllers: [CatsController],
  providers: [CatsService , CatsRepository],
  exports: [CatsService , CatsRepository]
})
export class CatsModule {}
