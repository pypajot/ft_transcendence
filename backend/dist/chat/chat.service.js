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
    receiveMessage(client_id, message, cli_arr, msg_id) {
        let message_obj = {
            message: message[0],
            id: msg_id,
            target: message[1],
        };
        let user = this.findUserById(client_id, cli_arr);
        if (user) {
            user.messages.push(message[0]);
        }
    }
    new_cli(id, name, client_id, cli_arr) {
        this.logger.log(`New Client : ${client_id}, Username: ${name}`);
        let cli = { id: id, name: name, socket_id: client_id, messages: [] };
        cli_arr.push(cli);
    }
    sendMessage(io, message) {
        io.emit('message', message);
    }
    async sendTo(io, message, target, cli_arr) {
        const target_id = cli_arr.filter(cli_arr => cli_arr.name == target)[0];
        console.log(`${target_id.socket_id} || ${target_id.name}\n`);
        io.to(target_id.socket_id).emit('message', message);
        this.logger.log(`Sent ${message} to ${target}`);
    }
};
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map