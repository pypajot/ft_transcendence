import { Socket } from 'socket.io';
//create a player class that will be used to create new players

export class Player {
	socket: Socket;
	paddleX: number;
	score: number;
	constructor(socket: Socket, paddleX: number) {
		this.socket = socket;
		this.paddleX = paddleX;
		this.score = 0;
	}
}
