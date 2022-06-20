import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CatsRepository } from 'src/cats/cats.repository';
// import { jwtConstants } from './constants';
// https://docs.nestjs.com/security/authentication#jwt-functionality

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly catsRepository : CatsRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "secret",
        });
    }

    async validate(payload: any) {
        const cat = await this.catsRepository.findCatByIdWithoutPassword(payload.sub);
        if(cat){
            return cat;
        }
        else{
            throw new UnauthorizedException();
        }
    }
}