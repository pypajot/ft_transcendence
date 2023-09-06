"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChatService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ChatService = exports.ChatService = ChatService_1 = class ChatService {
    constructor() {
        this.logger = new common_1.Logger(ChatService_1.name);
        this.prisma = new client_1.PrismaClient();
    }
    findUserById(client_id, cli_arr) {
        return cli_arr.find(cli_arr => cli_arr.socket_id === client_id);
    }
    async receiveMessage(socket_id, message) {
        const msg = await this.prisma.message.create({
            data: {
                content: message[0],
                author: {
                    connect: { socketId: socket_id }
                }
            }
        });
        return (msg);
    }
    async new_cli(client, name) {
        const chatUser = await this.prisma.user.update({
            where: {
                username: name,
            },
            data: {
                socketId: client.id,
            }
        });
        console.log(chatUser.socketId);
    }
    sendMessage(io, message) {
        io.emit('message', message);
    }
    async sendTo(io, message, target) {
        console.log(`test : ${message}`);
        const target_user = await this.prisma.user.findUnique({
            where: {
                username: target
            },
        });
        io.to(target_user.socketId).emit('message', message);
        this.logger.log(`Sent ${message} to ${target}`);
    }
    async sendToChannel(io, channel, message) {
        io.to(channel).emit('newChannelMessage', message);
    }
};
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map