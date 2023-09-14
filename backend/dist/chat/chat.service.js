"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChatGatewayService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGatewayService = exports.ChatControllerService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ChatControllerService = exports.ChatControllerService = class ChatControllerService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getFriendsList(user_name) {
        try {
            const friendsList = await this.prisma.user.findMany({
                where: {
                    NOT: {
                        username: user_name,
                    },
                },
            });
            console.log(await friendsList);
            return await friendsList;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getLogs(sender_name, receiver_name) {
        try {
            console.log(`Nice : ${sender_name}, ${receiver_name}`);
            const sender = await this.prisma.user.findUnique({
                where: {
                    username: sender_name,
                },
            });
            console.log(`Let goo : ${await sender.username}`);
            const receiver = await this.prisma.user.findUnique({
                where: {
                    username: receiver_name,
                },
            });
            const json_messages = await this.getMessages(await sender, await receiver);
            console.log(`from : ${sender_name} to ${receiver_name} \n ${json_messages}`);
            return json_messages;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getMessages(sender, receiver) {
        try {
            console.log(`${sender.id}, ${receiver.id}`);
            const messages = await this.prisma.message.findMany({
                where: {
                    authorSocketId: sender.socketId,
                    targetSocketId: receiver.socketId,
                },
            });
            return JSON.stringify(messages);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ChatControllerService = ChatControllerService = __decorate([
    (0, common_1.Injectable)()
], ChatControllerService);
let ChatGatewayService = exports.ChatGatewayService = ChatGatewayService_1 = class ChatGatewayService {
    constructor() {
        this.logger = new common_1.Logger(ChatGatewayService_1.name);
        this.prisma = new client_1.PrismaClient();
    }
    findUserById(client_id, cli_arr) {
        return cli_arr.find((cli_arr) => cli_arr.socket_id === client_id);
    }
    async respondToGetFriendsList(socket_id, io) {
        try {
            const userList = await this.prisma.user.findMany({
                where: {
                    socketId: { not: socket_id },
                },
            });
            console.log(await userList);
            io.emit('ResponseGetFriendsList', await userList);
        }
        catch (error) {
            console.log(error);
        }
    }
    async createMessage(socket_id, message, target) {
        try {
            console.log(message);
            const targetUser = await this.prisma.user.findUnique({
                where: {
                    username: target,
                },
            });
            const msg = await this.prisma.message.create({
                data: {
                    content: message,
                    author: {
                        connect: { socketId: socket_id },
                    },
                    target: {
                        connect: { socketId: targetUser.socketId },
                    },
                },
            });
            return msg;
        }
        catch (error) {
            console.log(error);
        }
    }
    async new_cli(client, name) {
        try {
            const chatUser = await this.prisma.user.update({
                where: {
                    username: name,
                },
                data: {
                    socketId: client.id,
                },
            });
            console.log(chatUser.socketId);
        }
        catch (error) {
            console.log(error);
        }
    }
    sendMessage(io, message) {
        io.emit('message', message);
    }
    async newMember(client, channelName) {
        const socket_id = client.id;
        try {
            const existingChannel = await this.prisma.channel.findUnique({
                where: {
                    name: channelName,
                },
            });
            const user = await this.prisma.user.findUnique({
                where: {
                    socketId: socket_id,
                },
            });
            if (existingChannel) {
                const newUserChannel = await this.prisma.channel.update({
                    where: {
                        name: channelName,
                    },
                    data: {
                        members: { connect: { id: user.id } },
                    },
                });
                client.join(channelName);
            }
            else {
                const newchannel = await this.prisma.channel.create({
                    data: {
                        name: channelName,
                        creator: user.username,
                        members: {
                            connect: { id: user.id },
                        },
                    },
                });
                client.join(channelName);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendTo(io, message, socket_id) {
        try {
            console.log(`test : ${message.content}`);
            const msgRes = await {
                id: message.id,
                authorSocketId: message.authorSocketId,
                targetSocketId: message.targetSocketId,
                sent: true,
                content: message.content,
                createdAt: message.createdAt,
            };
            io.to(socket_id).emit('messageSent', msgRes);
            msgRes.sent = false;
            io.to(message.targetSocketId).emit('messageRcv', msgRes);
            this.logger.log(`Sent ${message.content}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendToChannel(io, channel, message, socket_id) {
        try {
            const existingChannel = await this.prisma.channel.findUnique({
                where: {
                    name: channel,
                },
            });
            const msg = await this.prisma.message.create({
                data: {
                    content: message,
                    author: {
                        connect: { socketId: socket_id },
                    },
                    Channel: {
                        connect: { id: existingChannel.id },
                    },
                },
            });
            io.to(channel).emit('newChannelMessage', message);
        }
        catch (error) {
        }
    }
};
exports.ChatGatewayService = ChatGatewayService = ChatGatewayService_1 = __decorate([
    (0, common_1.Injectable)()
], ChatGatewayService);
//# sourceMappingURL=chat.service.js.map