import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService, GameState } from './game.service';
import { GameConfiguration } from './game.service';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { MatchmakingService } from './matchmaking.service';
import { Player } from './Player';

@WebSocketGateway({ cors: true, namespace: 'game' })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly gameService: GameService,
    private readonly matchmakingService: MatchmakingService) {}

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
    // place the player in the appropriate queue based on selected mode.
    this.matchmakingService.enqueue(player);
  }

  @SubscribeMessage('movePaddle')
  handleMovePaddle(client: Socket, data: { direction: string }): void {
    const { direction } = data;
    if (direction === 'up') {
      this.gameService.movePaddleUp(client.id); //replace later with client.id
    } else if (direction === 'down') {
      this.gameService.movePaddleDown(client.id); //replace later with client.id
    } else if (direction === 'stop') {
      this.gameService.stopPaddle(client.id); //replace later with client.id
    }
  }

  @SubscribeMessage('getGameState') // Custom event name to request game state from frontend
  handleGetGameState(client: any, gameConfiguration: GameConfiguration): void {
    const gameState: GameState = this.gameService.getGameState();
    // create a loop with a delay of 50ms
    setInterval(() => {
      this.gameService.updateGameState(gameConfiguration); // Update the game state
      const gameState: GameState = this.gameService.getGameState(); // Get the updated game state
      client.emit('gameState', gameState); // Send the game state to the client
    }, 50);
  }
}