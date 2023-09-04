import { Logger, OnModuleInit } from "@nestjs/common";
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
import { Client_elem } from "src/types/client.entity";

@WebSocketGateway({cors: '*', namespace: 'chat'})
class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit 
{
	public id = 0;
	public id_msg = 0;
	public cli_arr:  Client_elem[] = [];
	private readonly logger = new Logger(ChatGateway.name);
	constructor(private readonly chatService: ChatService){}
		@WebSocketServer() io: Server<any, ServerToClientEvents>;

		afterInit()
		{
			this.logger.log("Websocket Initialized\n");
		}
		handleConnection(client: any, ...args: any[]) {
			//Save client.id and link it to the username
			this.chatService.new_cli(this.id, client.handshake.query.username, client.id, this.cli_arr);
			this.id = this.id + 1;
			this.logger.log(`Client ${client.id} ${client.handshake.query.username} arrived`);
		}
		handleDisconnect(client: any){
			this.cli_arr = this.cli_arr.filter(cli_arr => cli_arr.socket_id !== client.id);
			//Remove the client.id and the username
			this.logger.log(`Client ${client.id} left`);
		}
		@SubscribeMessage('message')
		handleEvent(client: any, data: string[]): void {
			this.logger.log(`Message : ${data[0]} from : ${client.id} to: ${data[1]}`);
			this.chatService.receiveMessage(client.id, data, this.cli_arr, this.id_msg)
			this.id_msg = this.id_msg + 1;

			console.log("\n");
			this.cli_arr.map((elem) => {console.log(`client : ${elem.name} \n message: ${elem.messages[0]}\n`)})
			this.chatService.sendTo(this.io, data[0], data[1], this.cli_arr);
	//		this.chatService.sendMessage(this.io, message_obj);
		}
}

export default ChatGateway;
