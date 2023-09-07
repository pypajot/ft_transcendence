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
        try {
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
        catch (error) {
        }
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
    async newMember(client, channelName) {
        const socket_id = client.id;
        const existingChannel = await this.prisma.channel.findUnique({
            where: {
                name: channelName
            }
        });
        const user = await this.prisma.user.findUnique({
            where: {
                socketId: socket_id
            },
        });
        if (existingChannel) {
            const newUserChannel = await this.prisma.userChannel.create({
                data: {
                    username: user.username,
                    User: {
                        connect: { id: user.id }
                    },
                    channel: {
                        connect: { id: existingChannel.id }
                    }
                }
            });
            client.join(channelName);
        }
        else {
            const user = await this.prisma.user.findUnique({
                where: {
                    socketId: socket_id
                },
            });
            const newchannel = await this.prisma.channel.create({
                data: {
                    name: channelName,
                    creator: user.username,
                }
            });
            const newUserChannel = await this.prisma.userChannel.create({
                data: {
                    username: user.username,
                    User: {
                        connect: { id: user.id }
                    },
                    channel: {
                        connect: { id: newchannel.id }
                    }
                }
            });
            client.join(channelName);
        }
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
    async sendToChannel(io, channel, message, socket_id) {
        try {
            const existingChannel = await this.prisma.channel.findUnique({
                where: {
                    name: channel
                }
            });
            const msg = await this.prisma.message.create({
                data: {
                    content: message,
                    author: {
                        connect: { socketId: socket_id }
                    },
                    Channel: {
                        connect: { id: existingChannel.id }
                    }
                }
            });
            io.to(channel).emit('newChannelMessage', message);
        }
        catch (error) {
        }
    }
};
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map