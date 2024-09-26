import { JwtService } from '@nestjs/jwt';
import { UserInformationService } from '../user-information/user-information.service';
export declare class AuthService {
    private UserInformationService;
    private jwtService;
    constructor(UserInformationService: UserInformationService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
