import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserInformationService } from 'src/user-information/user-information.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserInformationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret_key',
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findOne(payload.sub);
    
    if (!user) {
      throw new UnauthorizedException('UserInformation not found');
    }

    return { userId: payload.sub, username: payload.firstName };
  }
}
