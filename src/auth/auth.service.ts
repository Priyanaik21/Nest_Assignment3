import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInformationService } from '../user-information/user-information.service'
@Injectable()
export class AuthService {
  constructor(
    private UserInformationService: UserInformationService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    return this.UserInformationService.validateUser(email, pass);
  }

  async login(user: any) {
    const payload = { sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}