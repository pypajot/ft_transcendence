import { Module } from "@nestjs/common";
import ChatGateway from "./chat.gateway";
import { ChatControllerService, ChatGatewayService } from "./chat.service";
import { ChatController } from "./chat.controller";

@Module({
    providers: [ChatGateway, ChatGatewayService, ChatControllerService],
    exports: [ChatGatewayService],
    controllers: [ChatController]
})
export class ChatModule{}
