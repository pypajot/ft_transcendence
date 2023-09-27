import { Player } from './Player';
import { GameConfiguration, GameMode, GameService } from './game.service';
import { Injectable } from '@nestjs/common';

const classicGameConfig: GameConfiguration = {
  mode: GameMode.Classic,
  ballSpeed: 3,
  ballSpeedIncreaseFactor: 1.1,
  paddleWidth: 10,
  paddleHeight: 50,
  paddleMoveSpeed: 7,
  goalLimit: 5,
};

const partyGameConfig: GameConfiguration = {
  mode: GameMode.Party,
  ballSpeed: 3,
  ballSpeedIncreaseFactor: 1.1,
  paddleWidth: 10,
  paddleHeight: 50,
  paddleMoveSpeed: 7,
  goalLimit: 5,
};

const hardcoreGameConfig: GameConfiguration = {
  mode: GameMode.Hardcore,
  ballSpeed: 5,
  ballSpeedIncreaseFactor: 1.2,
  paddleWidth: 10,
  paddleHeight: 50,
  paddleMoveSpeed: 10,
  goalLimit: 1,
};

@Injectable()
export class MatchmakingService {
  // Queues for each game mode
  private classicQueue: Player[] = [];
  private partyQueue: Player[] = [];
  private hardcoreQueue: Player[] = [];
  public gameService: { [key: string]: GameService } = {};

  constructor() {}
  // Add a player to the matchmaking queue
  enqueue(player: Player): void {
    const mode = player.gameMode;
    // check if a player with the same user_id is already in the queue and remove it
    this.classicQueue = this.classicQueue.filter(
      (p) => p.user_id !== player.user_id,
    );
    this.partyQueue = this.partyQueue.filter(
      (p) => p.user_id !== player.user_id,
    );
    this.hardcoreQueue = this.hardcoreQueue.filter(
      (p) => p.user_id !== player.user_id,
    );
    // Add the player to the appropriate queue based on selected mode.
    if (mode === GameMode.Classic) {
      this.classicQueue.push(player);
    } else if (mode === GameMode.Party) {
      this.partyQueue.push(player);
    } else if (mode === GameMode.Hardcore) {
      this.hardcoreQueue.push(player);
    }
  }

  // Remove a player from the matchmaking queue
  dequeue(player: Player): void {
    const mode = player.gameMode;
    // Remove the player from the appropriate queue based on selected mode.
    if (mode === GameMode.Classic) {
      this.classicQueue = this.classicQueue.filter(
        (p) => p.user_id !== player.user_id,
      );
    } else if (mode === GameMode.Party) {
      this.partyQueue = this.partyQueue.filter(
        (p) => p.user_id !== player.user_id,
      );
    } else if (mode === GameMode.Hardcore) {
      this.hardcoreQueue = this.hardcoreQueue.filter(
        (p) => p.user_id !== player.user_id,
      );
    }
  }

  // Attempt to match players in the queue
  tryMatchPlayers(mode: string): string {
    // Select the appropriate queue based on the game mode
    let queue: Player[];
    let gameConfiguration: GameConfiguration;
    let gameId: string;
    if (mode === GameMode.Classic) {
      queue = this.classicQueue;
      gameConfiguration = classicGameConfig;
    } 
    else if (mode === GameMode.Party) {
      queue = this.partyQueue;
      gameConfiguration = partyGameConfig;
    } 
    else if (mode === GameMode.Hardcore) {
      queue = this.hardcoreQueue;
      gameConfiguration = hardcoreGameConfig;
    }
    if (queue.length >= 2) {
      // Match the first two players and remove them from the queue
      const player1 = queue.shift()!;
      const player2 = queue.shift()!;
      // tell the players that they are matched
      player1.socket.emit('matched');
      player2.socket.emit('matched');
      // Initialize a new game session with these players
      gameId = player1.socket.id + player2.socket.id;
      this.gameService[gameId] = new GameService();
      this.gameService[gameId].initGame(
        gameConfiguration,
        player1,
        player2,
        gameId,
      );
      return gameId;
    }
    return undefined;
  }

  launchFromChat(player1: Player, player2: Player, mode: string): string {
    let gameConfiguration: GameConfiguration;
    if (mode === GameMode.Classic) {
      gameConfiguration = classicGameConfig;
    } 
    else if (mode === GameMode.Party) {
      gameConfiguration = partyGameConfig;
    } 
    else if (mode === GameMode.Hardcore) {
      gameConfiguration = hardcoreGameConfig;
    }
    player1.socket.emit('matched');
    player2.socket.emit('matched');
    // Initialize a new game session with these players
    const gameId = player1.socket.id + player2.socket.id;
    this.gameService[gameId] = new GameService();
    this.gameService[gameId].initGame(
      gameConfiguration,
      player1,
      player2,
      gameId,
    );
    return gameId;
  }
}
