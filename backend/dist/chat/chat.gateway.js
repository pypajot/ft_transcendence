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
var ChatGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("./chat.service");
let ChatGateway = ChatGateway_1 = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
        this.id = 0;
        this.id_msg = 0;
        this.username = null;
        this.logger = new common_1.Logger(ChatGateway_1.name);
    }
    afterInit() {
        this.logger.log('Websocket Initialized\n');
    }
    async handleConnection(client, ...args) {
        console.log(`New Connection Sokcet" ${client.handshake.query.username}`);
        if (client.handshake.query.username !== 'null') {
            this.username = client.handshake.query.username;
            this.chatService.new_cli(client, client.handshake.query.username);
        }
        this.logger.log(`Client ${client.id} ${client.handshake.query.username} arrived`);
    }
    handleDisconnect(client) {
        this.logger.log(`Client ${client.id} left`);
    }
    async handleEvent(client, data) {
        this.logger.log(`Message : ${data[0]} from : ${client.id} to: ${data[1]}`);
        const newMsg = this.chatService.createMessage(client.id, data[0], data[1]);
        this.chatService.sendTo(this.io, await newMsg, client.id);
    }
    handleChannelJoining(client, data) {
        this.chatService.newMember(client, data);
    }
    handleChannelMessage(client, data) {
        console.log(`${data[0]}, ${data[1]}`);
        this.chatService.sendToChannel(this.io, data[0], data[1], client.id);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "io", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleEvent", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('JoinChannel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleChannelJoining", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ChannelMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleChannelMessage", null);
ChatGateway = ChatGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: '*', namespace: 'chat' }),
    __metadata("design:paramtypes", [chat_service_1.ChatGatewayService])
], ChatGateway);
exports.default = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map