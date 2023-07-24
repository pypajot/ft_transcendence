import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GameService, GameState } from './game.service';

@WebSocketGateway({ cors: true })
export class SocketGateway {
  constructor(private readonly gameService: GameService) {}

  @WebSocketServer()
  server: Server;

  // Other WebSocket event handlers and logic can be implemented here

  @SubscribeMessage('getGameState') // Custom event name to request game state from frontend
  handleGetGameState(client: any): void {
    const gameState: GameState = this.gameService.getGameState();
    client.emit('gameState', gameState); // Emit the game state to the specific client that requested it
  }
}