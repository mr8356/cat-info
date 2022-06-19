import { HttpException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //class vaildation 수행
  // app.useGlobalFilters(new HttpException());
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
