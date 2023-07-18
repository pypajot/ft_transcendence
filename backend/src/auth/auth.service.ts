import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}
    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);
        // save the new user in the database
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            }); 
            // return the saved user
            return this.signToken(user.id, user.email);
        }
        catch (error) {
            // if the email already exists
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials already taken');
                }
            }
            throw error;
        }
    }
    async signin(dto: AuthDto) {
        //find the user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        //if the user is not found, throw an error
        if (!user) {
            throw new ForbiddenException('Credentials are invalid');
        }
        //compare the password hash
        const pwMatches = await argon.verify(user.hash, dto.password);
        //if the user is found, compare the password hash
        //if the password is incorrect, throw an error
        if (!pwMatches) {
            throw new ForbiddenException('Credentials are invalid');
        }
        return this.signToken(user.id, user.email);
    }
    async signToken(userId: number, email: string): Promise<{access_token: string}> {
        const payload = { sub: userId, email };
        return {
            access_token: await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: process.env.JWT_SECRET,
            }),
        };
    }
}