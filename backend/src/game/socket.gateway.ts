import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService } from './game.service';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { MatchmakingService } from './matchmaking.service';
import { Player } from './Player';

@WebSocketGateway({
	cors: true,
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly matchmakingService: MatchmakingService) {}

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
    this.matchmakingService.enqueue(player);
    const lobbyId = this.matchmakingService.tryMatchPlayers(mode);
    if (lobbyId !== undefined) {
      // wait for 1 second before emitting the createLobby event
      setTimeout(() => {
      client.emit('createLobby', lobbyId);
      this.matchmakingService.gameService[lobbyId].player1.emit('createLobby', lobbyId);
      console.log(`Lobby ${lobbyId} created`);
      }, 500);
    }
  }

  @SubscribeMessage('launchBall')
  handleLaunchGame(client: Socket, data: {lobbyId: string}): void {
    const { lobbyId } = data;
    if (lobbyId === undefined) {
      return;
    }
    this.matchmakingService.gameService[lobbyId].resetBall();
  }

  @SubscribeMessage('movePaddle')
  handleMovePaddle(client: Socket, data: {direction: string, lobbyId: string}): void {
    const { direction } = data;
    const { lobbyId } = data;
    if (lobbyId === undefined) {
      return;
    }
    if (direction === 'up') {
      this.matchmakingService.gameService[lobbyId].movePaddleUp(client.id);
    } 
    else if (direction === 'down') {
      this.matchmakingService.gameService[lobbyId].movePaddleDown(client.id);
    }
  }

   // Event to start game loop emitting game state to the client every 50ms
  @SubscribeMessage('getGameState')
  handleGetGameState(client: any, id: {lobbyId: string}): void {
    const lobbyId = id.lobbyId;
    let gameState = this.matchmakingService.gameService[lobbyId]?.getGameState();
    // create a loop with a delay of 50ms
    if (lobbyId === undefined) {
      return;
    }
    let interval = setInterval(() => {
      this.matchmakingService.gameService[lobbyId]?.updateGameState(); // Update the game state
      gameState = this.matchmakingService.gameService[lobbyId]?.getGameState(); // Get the updated game state
      // check for game end
      if (this.matchmakingService.gameService[lobbyId]?.player1Score === this.matchmakingService.gameService[lobbyId]?.goalLimit) {
        //console.log('IF player' + this.matchmakingService.gameService[lobbyId]?.player1.id + ' wins');
        client.emit('gameEnd', this.matchmakingService.gameService[lobbyId]?.player1.id);
        // stop the loop
        clearInterval(interval);
      }
      else if (this.matchmakingService.gameService[lobbyId]?.player2Score === this.matchmakingService.gameService[lobbyId]?.goalLimit) {
        //console.log('ELSEIF player' + this.matchmakingService.gameService[lobbyId]?.player1.id + ' wins');
        client.emit('gameEnd', this.matchmakingService.gameService[lobbyId]?.player2.id);
        clearInterval(interval);
      }
      // Send the game state to the client
      client.emit('gameState', gameState);
    }, 50);
  }

  @SubscribeMessage('destroyLobby')
  handleDestroyLobby(client: Socket, id: {lobbyId: string}): void {
    const lobbyId = id.lobbyId;
    if (lobbyId === undefined) {
      return;
    }
    console.log(`Lobby ${lobbyId} destroyed`);
    delete this.matchmakingService.gameService[lobbyId];
  }
}
