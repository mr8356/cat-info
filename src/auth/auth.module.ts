import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CatsRepository } from 'src/cats/cats.repository';
import { CatsModule } from 'src/cats/cats.module';
import { JwtAuthGuard } from './jwt/jwt.guard';

// npm install --save @nestjs/passport passport
// passport install

// npm install --save @nestjs/jwt passport-jwt
// npm install --save-dev @types/passport-jwt

// nest g module auth
// nest g service auth


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: '1y' },
    }),
    // 서로 참조할때 순환모듈
    forwardRef(()=> CatsModule),
  ],
  providers: [AuthService, JwtStrategy],
  // 
  exports: [AuthService, JwtStrategy]
})
export class AuthModule {}