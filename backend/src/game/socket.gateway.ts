import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService, GameState } from './game.service';
import { GameConfiguration } from './game.service';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { MatchmakingService } from './matchmaking.service';
import { Player } from './Player';
import { jsonc } from 'jsonc';

@WebSocketGateway({ cors: true, namespace: 'game' })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private gameService: GameService,
    private readonly matchmakingService: MatchmakingService) {
      gameService = undefined;
    }

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

  // Other WebSocket event handlers and logic can be implemented here

  @SubscribeMessage('selectGameMode') // Listen for the selectGameMode event
  handleSelectGameMode(client: Socket, mode: string): void {
    const player = new Player(client, 0, mode);
    console.log(`Player ${client.id} selected ${mode} mode`);
    // place the player in the appropriate queue based on selected mode.
    this.gameService = this.matchmakingService.enqueue(player);
  }

  @SubscribeMessage('movePaddle')
  handleMovePaddle(client: Socket, data: { direction: string }): void {
    const { direction } = data;
    if (direction === 'up') {
      this.gameService.movePaddleUp(client.id);
    } 
    else if (direction === 'down') {
      this.gameService.movePaddleDown(client.id);
    } 
    else if (direction === 'stop') {
      this.gameService.stopPaddle(client.id);
    }
  }

  // @SubscribeMessage('startGame')
  // handleStartGame(client: Socket, opponent: Socket, gameConfiguration: GameConfiguration): void {
  //   console.log('Starting game');
  //   this.gameService.initGame(gameConfiguration, client, opponent);
  // }

  @SubscribeMessage('getGameState') // Custom event name to request game state from frontend
  handleGetGameState(client: any): void {
    let gameState = this.gameService?.getGameState();
    console.log('handleGetGameState function');
    // create a loop with a delay of 50ms
    if (this.gameService !== undefined) {
      setInterval(() => {
        console.log('interval loop');
        this.gameService?.updateGameState(); // Update the game state
        gameState = this.gameService?.getGameState(); // Get the updated game state
        // convert the gameState to a string
        const gameStateString = jsonc.stringify(gameState);
        // Send the game state to the client
        client.emit('gameState', gameStateString);
      }, 50);
    }
  }
}