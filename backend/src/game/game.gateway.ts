import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { MatchmakingService } from './matchmaking.service';
import { Player } from './Player';
import { PrismaClient } from '@prisma/client';
import { subscribe } from 'diagnostics_channel';

@WebSocketGateway({
  cors: true,
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly matchmakingService: MatchmakingService) {}

  prisma = new PrismaClient();

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket, ...args: any[]): void {
    console.log(`Client ${client.id} connected`);
    client.emit('connection');
  }
  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);

    // Check if the client was part of an active game
    const lobbyId = this.findLobbyByClientId(client.id);
    if (!lobbyId) {
      return;
    }
    this.handleForfait(client, {lobbyId});
  }

  private findLobbyByClientId(clientId: string): string | null {
    for (const [lobbyId, gameService] of Object.entries(this.matchmakingService.gameService)) {
      if (gameService.player1?.socket?.id === clientId) {
        return lobbyId;
      }
      if (gameService.player2?.socket?.id === clientId) {
        return lobbyId;
      }
    }
    return null;
  }

  private handleForfait(client: any, id: {lobbyId: string}): Promise<void> {
    const lobbyId = id.lobbyId;
    const forfait = true;
    if (lobbyId === undefined) {
      return;
    }
    const player1 = this.matchmakingService.gameService[lobbyId].player1;
    const player2 = this.matchmakingService.gameService[lobbyId].player2;
    const gameId = this.matchmakingService.gameService[lobbyId].gameId;
    if (client.id === player1.socket.id) {
      this.handleUpdateDB(player2, player1, gameId);
      client.emit('gameEnd', player2.socket.id, forfait);
      player2.socket.emit('gameEnd', player2.socket.id, forfait);
    }
    else if (client.id === player2.socket.id) {
      this.handleUpdateDB(player1, player2, gameId);
      client.emit('gameEnd', player1.socket.id, forfait);
      player1.socket.emit('gameEnd', player1.socket.id, forfait);
    }
  }
  
  async createPlayer(socket: Socket, mode: string): Promise<Player> {
    try {
      const user = await this.prisma.user.findMany({
        where: {
          socketId: socket.id,
        },
      });
      if (user) {
        const player = user.map((value) => {
          return new Player(socket, mode, value.username, value.id);
        });
        return player[0];
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }

  async handleUpdateDB(winner: Player, loser: Player, gameId: number) {
    try {
      await this.prisma.user.update({
        where: {
          id: winner.user_id,
        },
        data: {
          wins: {
            increment: 1,
          },
          gamesWon: {
            connect: [{ id: gameId }],
          },
          gamesPlayed: {
            connect: [{ id: gameId }],
          },
        },
      });
      await this.prisma.user.update({
        where: {
          id: loser.user_id,
        },
        data: {
          losses: {
            increment: 1,
          },
          gamesLost: {
            connect: [{ id: gameId }],
          },
          gamesPlayed: {
            connect: [{ id: gameId }],
          },
        },
      });
      await this.prisma.game.update({
        where: {
          id: gameId,
        },
        data: {
          winner: {
            connect: { id: winner.user_id },
          },
          loser: {
            connect: { id: loser.user_id },
          },
          winnerScore: winner.score,
          loserScore: loser.score,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  @SubscribeMessage('selectGameMode')
  async handleSelectGameMode(client: Socket, mode: string): Promise<void> {
    const player = await this.createPlayer(client, mode);
    console.log(`Player ${client.id} selected ${player.gameMode} mode`);
    // place the player in the appropriate queue based on selected mode.
    this.matchmakingService.enqueue(player);
    const lobbyId = this.matchmakingService.tryMatchPlayers(mode);
    if (lobbyId !== undefined) {
      // wait for 1/2 second before emitting the createLobby event
      setTimeout(() => {
        const username1 =
          this.matchmakingService.gameService[lobbyId].player1.username;
        const username2 =
          this.matchmakingService.gameService[lobbyId].player2.username;
        client.emit('createLobby', lobbyId, username1, username2);
        this.matchmakingService.gameService[lobbyId].player1.socket.emit(
          'createLobby',
          lobbyId,
          username1,
          username2,
        );
        console.log(`Lobby ${lobbyId} created`);
      }, 500);
    }
  }

  @SubscribeMessage('launchBall')
  handleLaunchGame(client: Socket, data: { lobbyId: string }): void {
    const { lobbyId } = data;
    if (lobbyId === undefined) {
      return;
    }
    this.matchmakingService.gameService[lobbyId].resetBall();
  }

  @SubscribeMessage('movePaddle')
  handleMovePaddle(
    client: Socket,
    data: { direction: string; lobbyId: string },
  ): void {
    const { direction } = data;
    const { lobbyId } = data;
    if (lobbyId === undefined) {
      return;
    }
    if (direction === 'up') {
      this.matchmakingService.gameService[lobbyId].movePaddleUp(client.id);
    } else if (direction === 'down') {
      this.matchmakingService.gameService[lobbyId].movePaddleDown(client.id);
    }
  }

  // Event to start game loop emitting game state to the client every 50ms
  @SubscribeMessage('getGameState')
  async handleGetGameState(
    client: any,
    id: { lobbyId: string },
  ): Promise<void> {
    const lobbyId = id.lobbyId;
    if (lobbyId === undefined) {
      return;
    }
    let gameState = this.matchmakingService.gameService[lobbyId].getGameState();
    const player1 = this.matchmakingService.gameService[lobbyId].player1;
    const player2 = this.matchmakingService.gameService[lobbyId].player2;
    const gameId = this.matchmakingService.gameService[lobbyId].gameId;
    // create a loop with a delay of 50ms
    let interval = setInterval(async () => {
      // check if the game service still exists
      if (this.matchmakingService.gameService[lobbyId] === undefined) {
        clearInterval(interval);
        return;
      }
      this.matchmakingService.gameService[lobbyId].updateGameState(); // Update the game state
      gameState = this.matchmakingService.gameService[lobbyId].getGameState(); // Get the updated game state
      // check for game end
      if (
        this.matchmakingService.gameService[lobbyId].player1.score ===
        this.matchmakingService.gameService[lobbyId]?.goalLimit
      ) {
        if (client.id === player1.socket.id)
          this.handleUpdateDB(player1, player2, gameId);
        client.emit('gameEnd', player1.socket.id, false);
        clearInterval(interval);
      } else if (
        this.matchmakingService.gameService[lobbyId].player2.score ===
        this.matchmakingService.gameService[lobbyId]?.goalLimit
      ) {
        if (client.id === player1.socket.id)
          this.handleUpdateDB(player2, player1, gameId);
        client.emit('gameEnd', player2.socket.id, false);
        clearInterval(interval);
      }
      // Send the game state to the client
      client.emit('gameState', gameState);
    }, 50);
  }
  
  @SubscribeMessage('forfait')
  handleForfaitEvent(client: Socket, id: {lobbyId: string}): void {
    this.handleForfait(client, id);
  }

  @SubscribeMessage('destroyLobby')
  handleDestroyLobby(client: Socket, id: { lobbyId: string }): void {
    const lobbyId = id.lobbyId;
    if (lobbyId === undefined) {
      return;
    }
    console.log(`Lobby ${lobbyId} destroyed`);
    delete this.matchmakingService.gameService[lobbyId];
  }
}
