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
        this.cli_arr = [];
        this.logger = new common_1.Logger(ChatGateway_1.name);
    }
    afterInit() {
        this.logger.log("Websocket Initialized\n");
    }
    handleConnection(client, ...args) {
        this.chatService.new_cli(this.id, args[0], client.id, this.cli_arr);
        this.id = this.id + 1;
        this.logger.log(`Client ${client.id} arrived`);
    }
    handleDisconnect(client) {
        this.cli_arr = this.cli_arr.filter(cli_arr => cli_arr.socket_id !== client.id);
        this.logger.log(`Client ${client.id} left`);
    }
    handleEvent(client, data) {
        this.logger.log(`Message : ${data} from : ${client.id}`);
        this.chatService.receiveMessage(client.id, data, this.cli_arr, this.id_msg);
        this.id_msg = this.id_msg + 1;
        console.log("\n");
        this.cli_arr.map((elem) => { console.log(`client : ${elem.id} \n message: ${elem.messages[0]}\n`); });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "io", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleEvent", null);
ChatGateway = ChatGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: '*', namespace: 'chat' }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
exports.default = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map