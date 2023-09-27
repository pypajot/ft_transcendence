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
  private intervals: { [lobbyId: string]: NodeJS.Timeout } = {};

  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client ${client.id} connected`);
    client.emit('connection');
  }
  async handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    // Check if the client was part of an active game
    const lobbyId = this.findLobbyByClientId(client.id);
    if (lobbyId) { this.handleForfait(client, {lobbyId}); }
    await this.prisma.user.update({
      where: {
        socketId: client.id,
      },
      data: {
        status: 'offline',
      },
    });
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

  async handleForfait(client: any, id: {lobbyId: string}): Promise<void> {
    console.log ('forfait detected');
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
      clearInterval(this.intervals[lobbyId]);
    }
    else if (client.id === player2.socket.id) {
      this.handleUpdateDB(player1, player2, gameId);
      client.emit('gameEnd', player1.socket.id, forfait);
      player1.socket.emit('gameEnd', player1.socket.id, forfait);
      clearInterval(this.intervals[lobbyId]);
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
          status: 'online',
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
          status: 'online',
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
    // place the player in the appropriate queue based on selected mode.
    this.matchmakingService.enqueue(player);
    const lobbyId = this.matchmakingService.tryMatchPlayers(mode);
    if (lobbyId !== undefined) {
      const gameService = this.matchmakingService.gameService[lobbyId];
      // wait for 1/2 second before emitting the createLobby event
      setTimeout(() => {
        const username1 = gameService.player1.username;
        const username2 = gameService.player2.username;
        client.emit('createLobby', lobbyId, username1, username2);
        gameService.player1.socket.emit('createLobby', lobbyId, username1, username2);
        console.log(`Lobby ${lobbyId} created`);
      }, 500);
    }
  }

  @SubscribeMessage('sendInviteToPlay')
  async handleInviteToPlay(client: Socket, data: { target_socketId: string }): Promise<void> {
    const { target_socketId } = data;
    this.server.to(target_socketId).emit('invitedToPlay', client.id);
  }

  @SubscribeMessage('launchGameFromChat')
  async handleLaunchGameFromChat(client: Socket, data: { opponent: Socket; mode: string }): Promise<void> {
    const { opponent, mode } = data;
    const player1 = await this.createPlayer(client, mode);
    const player2 = await this.createPlayer(opponent, mode);
    const lobbyId = this.matchmakingService.launchFromChat(player1, player2, mode);
    if (lobbyId !== undefined) {
      const gameService = this.matchmakingService.gameService[lobbyId];
      // wait for 1/2 second before emitting the createLobby event
      setTimeout(() => {
        const username1 = gameService.player1.username;
        const username2 = gameService.player2.username;
        client.emit('createLobby', lobbyId, username1, username2);
        gameService.player1.socket.emit('createLobby', lobbyId, username1, username2);
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
  handleMovePaddle(client: Socket, data: { lobbyId: string; direction: string }): void {
    const { lobbyId, direction } = data;
    if (!lobbyId)
      return; 
    const gameService = this.matchmakingService.gameService[lobbyId];
    const clientId = client.id;

    if (direction === 'up') {
      gameService.movePaddleUp(clientId);
    } 
    else if (direction === 'down') {
      gameService.movePaddleDown(clientId);
    } 
    else if (direction === 'stop') {
      gameService.stopPaddle(clientId);
    }
  }
  
  // Event to start game loop emitting game state to the client every 50ms
  @SubscribeMessage('getGameState')
  async handleGetGameState(
    client: any,
    id: { lobbyId: string },
  ): Promise<void> {
    console.log('game state requested');
    const lobbyId = id.lobbyId;
    if (lobbyId === undefined || lobbyId === null) {
      return;
    }
    if (this.intervals[lobbyId]) {
      clearInterval(this.intervals[lobbyId]);
      delete this.intervals[lobbyId];
    }
    const gameService = this.matchmakingService.gameService[lobbyId];
    let   gameState = gameService.getGameState();
    const player1 = gameService.player1;
    const player2 = gameService.player2;
    const gameId = gameService.gameId;
    // create a loop with a delay of 50ms
    this.intervals[lobbyId] = setInterval(async () => {
      if (lobbyId === undefined || lobbyId === null) {
        clearInterval(this.intervals[lobbyId]);
        delete this.intervals[lobbyId];
        return;
      }
      if (gameService === undefined || gameService === null) {
        clearInterval(this.intervals[lobbyId]);
        delete this.intervals[lobbyId];
        return;
      }
      gameService.updateGameState(); // Update the game state
      gameState = gameService.getGameState(); // Get the updated game state
      // check for game end
      if (gameService.player1.score === gameService.goalLimit) {
        this.handleUpdateDB(player1, player2, gameId);
        player1.socket.emit('gameEnd', player1.socket.id, false);
        player2.socket.emit('gameEnd', player1.socket.id, false);
        clearInterval(this.intervals[lobbyId]);
        delete this.intervals[lobbyId];
      } 
      else if ( gameService.player2.score === gameService.goalLimit) {
        this.handleUpdateDB(player2, player1, gameId);
        player1.socket.emit('gameEnd', player2.socket.id, false);
        player2.socket.emit('gameEnd', player2.socket.id, false);
        clearInterval(this.intervals[lobbyId]);
        delete this.intervals[lobbyId];
      }
      // Send the game state to the client
      player1.socket.emit('gameState', gameState);
      player2.socket.emit('gameState', gameState);
    }, 1000 / 60);
  }

  @SubscribeMessage('destroyLobby')
  handleDestroyLobby(client: Socket, id: { lobbyId: string }): void {
    const lobbyId = id.lobbyId;
    if (lobbyId === undefined || lobbyId === null) {
      return;
    }
    console.log(`Lobby ${lobbyId} destroyed`);
    delete this.matchmakingService.gameService[lobbyId];
  }
}