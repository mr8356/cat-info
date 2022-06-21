import { HttpException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //class vaildation 수행
  // app.useGlobalFilters(new HttpException())

  // api 문서 만드는 코드(복붙)//////////////////////
  const config = new DocumentBuilder()
    .setTitle('Cats dating')
    .setDescription('the Cats api')
    .setVersion('1.0.0')
    .addTag('cats')
    .build()
  const document:OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs' , app, document);
////////////////////////////////////////////////

  app.enableCors({
    origin:true,
    credentials:true
  })

  app.useStaticAssets(path.join(__dirname , './common' , 'uploads'),{
    prefix: '/media',
  });


  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();


// api 문서 만들기
// npm i --save @nestjs/swagger swagger-ui-express

// 정적할당
// npm install --save @nestjs/serve-static