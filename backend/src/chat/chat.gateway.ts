import { OnModuleInit } from "@nestjs/common";
import {
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ServerToClientEvents } from "src/types/events";
import { ChatService } from "./chat.service";
import { Message } from "src/types/message.entity";

@WebSocketGateway({cors: '*', namespace: 'chat'})
class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit 
{
	constructor(private readonly chatService: ChatService){}
		@WebSocketServer() io: Server<any, ServerToClientEvents>;

		afterInit()
		{
			console.log("Websocket Initialized\n");
		}
		handleConnection(client: any, ...args: any[]) {
			console.log(`Client ${client.id} arrived`);
		}
		handleDisconnect(client: any){
			console.log(`Client ${client.id} left`);
		}

		@SubscribeMessage('message')
		handleEvent(@MessageBody() data: string): void {
			console.log(data);
        	let message_obj: Message = {
        		message : data,
        		id : "id"
			}
			this.chatService.sendMessage(this.io, message_obj);
		}
}

export default ChatGateway;
