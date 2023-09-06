import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthDto } from '../dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService){}

    async signin(user: string, pwd: string) {
        const userr = await this.prismaService.user.findUnique({where: {username: user}  });
        if (!userr){
            throw new ForbiddenException('Credentials incorrect');
        }
        const pwdMaches = await argon.verify(userr.password, pwd);
        if (!pwdMaches) {
            throw new ForbiddenException('Credentials incorrect');
        }
        console.log(userr);
        delete userr.password;
        return (userr);
    }
    async signup(dto: AuthDto) {
        console.log(dto.username);
        console.log(dto.password);
        const hash = await argon.hash(dto.password);

        try {
        const user = await this.prismaService.user.create({
            data: {
                username: dto.username,
                password: hash,
                socketId: undefined 
            }
        });
        delete user.password;
        //Or use select object in user.create
        return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002'){
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }

    }
}
