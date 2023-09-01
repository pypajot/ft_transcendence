import { AuthDto } from '../dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    signin(user: string, pwd: string): Promise<{
        username: string;
        id: number;
        password: string;
    }>;
    signup(dto: AuthDto): Promise<{
        username: string;
        id: number;
        password: string;
    }>;
}
