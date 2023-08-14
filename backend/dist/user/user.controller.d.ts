import { UserService } from './user.service';
export declare class UserController {
    private userservice;
    constructor(userservice: UserService);
    getUser(params: any): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
}
