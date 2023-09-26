import { Module } from "@nestjs/common";
import ChatGateway from "./chat.gateway";
import { ChatControllerService, ChatGatewayService } from "./chat.service";
import { ChatController } from "./chat.controller";
import { UserService } from "src/user/user.service";

@Module({
    providers: [ChatGateway, ChatGatewayService, ChatControllerService, UserService],
    exports: [ChatGatewayService],
    controllers: [ChatController]
})
export class ChatModule{}
