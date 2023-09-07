import { Socket } from 'socket.io';
//create a player class that will be used to create new players

export class Player {
	socket: Socket;
	paddleX: number;
	score: number;
	gameMode: string;

	constructor(socket: Socket, paddleX: number, gameMode: string) {
		this.socket = socket;
		this.paddleX = paddleX;
		this.score = 0;
		this.gameMode = gameMode;
	}
};