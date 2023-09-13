"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const library_1 = require("@prisma/client/runtime/library");
let UserService = exports.UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async signin(user, pwd) {
        const userr = await this.prismaService.user.findUnique({ where: { username: user } });
        if (!userr) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        const pwdMaches = await argon.verify(userr.password, pwd);
        if (!pwdMaches) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        console.log(userr);
        delete userr.password;
        return (userr);
    }
    async signup(dto) {
        console.log(dto.username);
        console.log(dto.password);
        const hash = await argon.hash(dto.password);
        try {
            let r = (Math.random() + 1).toString(36).substring(7);
            const user = await this.prismaService.user.create({
                data: {
                    username: dto.username,
                    password: hash,
                    socketId: r
                }
            });
            delete user.password;
            return user;
        }
        catch (error) {
            console.log(error);
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map