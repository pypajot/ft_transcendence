import { Player } from './Player';
import { GameConfiguration, GameMode, GameService } from './game.service';
import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

const classicGameConfig: GameConfiguration = {
	mode: GameMode.Classic,
	ballSpeed: 3,
	ballSpeedIncreaseFactor: 1.05,
	paddleWidth: 10,
	paddleHeight: 100,
	paddleMoveSpeed: 10,
	goalLimit: 10,
};

const partyGameConfig: GameConfiguration = {
	mode: GameMode.Party,
	ballSpeed: 3,
	ballSpeedIncreaseFactor: 1.05,
	paddleWidth: 10,
	paddleHeight: 100,
	paddleMoveSpeed: 20,
	goalLimit: 10,
};

const hardcoreGameConfig: GameConfiguration = {
	mode: GameMode.Hardcore,
	ballSpeed: 5,
	ballSpeedIncreaseFactor: 1.2,
	paddleWidth: 5,
	paddleHeight: 50,
	paddleMoveSpeed: 20,
	goalLimit: 1,
};

@Injectable()
export class MatchmakingService {
	// Queues for each game mode
	private classicQueue: Player[] = [];
	private partyQueue: Player[] = [];
	private hardcoreQueue: Player[] = [];

	constructor() {}
  	// Add a player to the matchmaking queue
	enqueue(player: Player): void {
		const mode = player.gameMode;
    	// Add the player to the appropriate queue based on selected mode.
		if (mode === GameMode.Classic) {
			this.classicQueue.push(player);
		  }
		else if (mode === GameMode.Party) {
			this.partyQueue.push(player);
		  }
		else if (mode === GameMode.Hardcore) {
			this.hardcoreQueue.push(player);
		  }
		// Attempt to match players in the queue
		this.tryMatchPlayers(mode);
  	}

  	// Remove a player from the matchmaking queue
	dequeue(player: Player): void {
		const mode = player.gameMode;
		// Remove the player from the appropriate queue based on selected mode.
		if (mode === GameMode.Classic) {
			this.classicQueue = this.classicQueue.filter((p) => p.socket.id !== player.socket.id);
		}
		else if (mode === GameMode.Party) {
			this.partyQueue = this.partyQueue.filter((p) => p.socket.id !== player.socket.id);
		}
		else if (mode === GameMode.Hardcore) {
			this.hardcoreQueue = this.hardcoreQueue.filter((p) => p.socket.id !== player.socket.id);
		}
	}

	// Attempt to match players in the queue
	private tryMatchPlayers(mode: string): void {
		
		// Select the appropriate queue based on the game mode
		let queue: Player[];
		if (mode === GameMode.Classic) {
			queue = this.classicQueue;
		}
		else if (mode === GameMode.Party) {
			queue = this.partyQueue;
		}
		else if (mode === GameMode.Hardcore) {
			queue = this.hardcoreQueue;
		}
		if (queue.length >= 2) {
		// Match the first two players and remove them from the queue
			const player1 = queue.shift()!;
			const player2 = queue.shift()!;
		// Initialize a new game session with these players
			this.initializeGame(player1, player2);
		}
	}

  // Initialize a new game session with matched players
  private initializeGame(player1: Player, player2: Player): void {
    // Create a new game session and start the game
	if (player1.gameMode === GameMode.Classic) {
		const gameService = new GameService();
		gameService.initGame(classicGameConfig, player1.socket, player2.socket);
	}
	else if (player1.gameMode === GameMode.Party) {
		const gameService = new GameService();
		gameService.initGame(partyGameConfig, player1.socket, player2.socket);
	}
	else if (player1.gameMode === GameMode.Hardcore) {
		const gameService = new GameService();
		gameService.initGame(hardcoreGameConfig, player1.socket, player2.socket);
	}
  }
}

// @WebSocketGateway({ cors: true, namespace: 'matchmaking' })
// export class MatchmakingGateway {
//   constructor(private readonly matchmakingService: MatchmakingService) {}

//   @WebSocketServer()
//   server: Server;

//   @SubscribeMessage('selectGameMode') // Listen for the selectGameMode event
//   handleSelectGameMode(client: Socket, mode: string): void {
// 	const player = new Player(client, 0, mode);
//     // place the player in the appropriate queue based on selected mode.
//     this.matchmakingService.enqueue(player);
//   }
// }