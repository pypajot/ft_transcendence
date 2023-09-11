import { UserService } from './user.service';
import { AuthDto } from '../dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signup(dto: AuthDto): Promise<{
        username: string;
        id: number;
        password: string;
        friends: string[];
        socketId: string;
    }>;
    signin(dto: AuthDto): Promise<{
        username: string;
        id: number;
        password: string;
        friends: string[];
        socketId: string;
    }>;
}
