import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { UserService } from "./user.service";
import { WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { UserDTO } from "./dto/user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@WebSocketGateway({cors: true})
export class UserGateway implements OnGatewayConnection, OnGatewayDisconnect {
	constructor(private readonly userService: UserService) {}

	handleConnection(client: Socket, ...args: any[]): void {
		console.log('Client connected');
		client.emit("connection");
	}
	handleDisconnect(client: any) {
		console.log('Client disconnected');
		client.emit("disconnection");
	}
	@WebSocketServer()
	server: Server;

	@SubscribeMessage('updateUser')
	async handleUpdateUser(client: Socket, user: UserDTO) {
		await this.userService.updateUser(user);
	}
}