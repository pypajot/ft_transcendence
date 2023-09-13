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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const dto_1 = require("../dto");
let ChatController = exports.ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    getLogsSender(dto) {
        return this.chatService.getLogs(dto.sender, dto.receiver);
    }
    getLogsReceiver(dto) {
        return (this.chatService.getLogs(dto.sender, dto.receiver));
    }
    getFriends(username) {
        return ((this.chatService.getFriendsList(username.user_name)));
    }
};
__decorate([
    (0, common_1.Post)('getMessageSent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.PrivMsgLogsDto]),
    __metadata("design:returntype", Object)
], ChatController.prototype, "getLogsSender", null);
__decorate([
    (0, common_1.Post)('getMessageReceived'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.PrivMsgLogsDto]),
    __metadata("design:returntype", Object)
], ChatController.prototype, "getLogsReceiver", null);
__decorate([
    (0, common_1.Get)('getFriendsList'),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getFriends", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatControllerService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map