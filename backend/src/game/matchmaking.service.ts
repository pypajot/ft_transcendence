import { Player } from './Player';
import { GameConfiguration, GameMode } from './game.service';

switch (gameConfiguration.mode) {
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
}

export class MatchmakingService {
	private queues: Map<GameMode, Player[]> = new Map();

	constructor() {
		// Initialize queues for each game mode
		for (const mode of Object.values(GameMode)) {
		  this.queues.set(mode, []);
		}
	  }
  	// Add a player to the matchmaking queue
	enqueue(player: Player, gameConfiguration: GameConfiguration): void {
    	const queue = this.queues.get(gameConfiguration.mode);

    	if (queue) {
      	// Store the game configuration with the player
      	queue.push(player);
      	this.tryMatchPlayers(gameConfiguration.mode);
    	}
  	}

  	// Remove a player from the matchmaking queue
	dequeue(player: Player, gameConfiguration: GameConfiguration): void {
		const queue = this.queues.get(gameConfiguration.mode);
		if (queue) {
			const index = queue.indexOf(player);
			if (index !== -1)
				queue.splice(index, 1);
		}
	}

	// Attempt to match players in the queue
	private tryMatchPlayers(gameMode: GameMode): void {
		const queue = this.queues.get(gameMode);
		if (queue.length >= 2) {
		// Match the first two players in the queue
			const player1 = queue.shift()!;
			const player2 = queue.shift()!;
		// Initialize a new game session with these players
			this.initializeGame(player1, player2);
		}
	}

  // Initialize a new game session with matched players
  private initializeGame(player1: Player, player2: Player): void {
    // Create a new game session and start the game
    // You'll need to implement this part based on your game logic
    // For example, you can create a GameSession class that manages the game state
    // and emits game events to the matched players.
  }
}
