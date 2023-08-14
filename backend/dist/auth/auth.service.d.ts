import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(dto: AuthDto): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    login(): string;
}
