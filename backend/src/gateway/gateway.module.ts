import { Module } from "@nestjs/common";
import ChatGateway from "../chat/chat.gateway";
import { ChatGatewayService } from "src/chat/chat.service";

@Module({
	providers: [ChatGateway, ChatGatewayService]
})

export class GatewayModule {}
