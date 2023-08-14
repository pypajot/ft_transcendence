import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUser(params: any): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
}
