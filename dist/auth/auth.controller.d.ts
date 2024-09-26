import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
