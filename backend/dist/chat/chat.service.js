"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
let ChatService = exports.ChatService = class ChatService {
    findUserById(client_id, cli_arr) {
        return cli_arr.find(cli_arr => cli_arr.socket_id === client_id);
    }
    receiveMessage(client_id, message, cli_arr, msg_id) {
        let message_obj = {
            message: message,
            id: msg_id
        };
        let user = this.findUserById(client_id, cli_arr);
        if (user) {
            user.messages.push(message);
        }
    }
    new_cli(id, name, client_id, cli_arr) {
        let cli = { id: id, name: name, socket_id: client_id, messages: [] };
        cli_arr.push(cli);
    }
    sendMessage(io, message) {
        io.emit('message', message);
    }
};
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map