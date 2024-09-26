import { Strategy } from 'passport-jwt';
import { UserInformationService } from 'src/user-information/user-information.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserInformationService);
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
