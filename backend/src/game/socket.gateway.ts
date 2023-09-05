import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService, GameState } from './game.service';
import { GameConfiguration } from './game.service';

@WebSocketGateway({ cors: true })
export class SocketGateway {
  constructor(private readonly gameService: GameService) {}

  @WebSocketServer()
  server: Server;

  // Other WebSocket event handlers and logic can be implemented here

  @SubscribeMessage('movePaddle')
  handleMovePaddle(client: Socket, data: { direction: string }): void {
    const { direction } = data;
    if (direction === 'up') {
      this.gameService.movePaddleUp('player1'); //replace later with client.id
    } else if (direction === 'down') {
      this.gameService.movePaddleDown('player1'); //replace later with client.id
    } else if (direction === 'stop') {
      this.gameService.stopPaddle('player1'); //replace later with client.id
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