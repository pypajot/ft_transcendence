import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authservice;
    constructor(authservice: AuthService);
    login_form(): string;
    signin(dto: AuthDto): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    login(): string;
}
