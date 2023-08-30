import { Module } from "@nestjs/common";
import ChatGateway from "../chat/chat.gateway";
import { ChatService } from "src/chat/chat.service";

@Module({
	providers: [ChatGateway, ChatService]
})

export class GatewayModule {}
