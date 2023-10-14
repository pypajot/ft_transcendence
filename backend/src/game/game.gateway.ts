import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { MatchmakingService } from './matchmaking.service';
import { Player } from './Player';
import { PrismaService } from 'src/prisma/prisma.service';
import { AchievementsService } from './achievements.service';
import { UserService } from 'src/user/user.service';

@WebSocketGateway({
    cors: true,
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        private readonly matchmakingService: MatchmakingService,
        private prisma: PrismaService,
        private achievements: AchievementsService,
        private userservice: UserService
    ) {}

    private intervals: { [lobbyId: string]: NodeJS.Timeout } = {};

    @WebSocketServer()
    server: Server;

    async handleConnection(client: Socket, ...args: any[]) {
        console.log(`Client ${client.id} connected`);
        client.emit('connection');
    }
    async handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
        // Check if a player was in a queue
        const player = this.matchmakingService.findPlayerBySocketId(client.id);
        if (player) {
            this.matchmakingService.dequeue(player);
        }
        // Check if the client was part of an active game
        const lobbyId = this.findLobbyByClientId(client.id);
        if (lobbyId) {
            this.handleForfait(client, { lobbyId });
        }
        this.userservice.changeStatus(client.id, 'offline', this.server);
    }

    private findLobbyByClientId(clientId: string): string | null {
        for (const [lobbyId, gameLobby] of Object.entries(
            this.matchmakingService.gameLobby
        )) {
            if (gameLobby.player1?.socket?.id === clientId) {
                return lobbyId;
            }
            if (gameLobby.player2?.socket?.id === clientId) {
                return lobbyId;
            }
        }
        return null;
    }

    async handleForfait(client: any, id: { lobbyId: string }): Promise<void> {
        console.log('forfait detected');
        const lobbyId = id.lobbyId;
        const forfait = true;
        if (lobbyId === undefined) {
            return;
        }
        const player1 = this.matchmakingService.gameLobby[lobbyId].player1;
        const player2 = this.matchmakingService.gameLobby[lobbyId].player2;
        const gameId = this.matchmakingService.gameLobby[lobbyId].gameId;
        if (client.id === player1.socket.id) {
            this.handleUpdateDB(player2, player1, gameId);
            client.emit('gameEnd', player2.socket.id, forfait);
            player2.socket.emit('gameEnd', player2.socket.id, forfait);
            clearInterval(this.intervals[lobbyId]);
        } else if (client.id === player2.socket.id) {
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
            this.userservice.changeStatus(
                winner.socket.id,
                'online',
                this.server
            );
            this.userservice.changeStatus(
                loser.socket.id,
                'online',
                this.server
            );
            this.achievements.checkAllAchievements(
                winner.user_id,
                loser.user_id
            );
        } catch (error) {
            console.log(error);
        }
    }

    @SubscribeMessage('selectGameMode')
    async handleSelectGameMode(client: Socket, mode: string): Promise<void> {
        const player = await this.createPlayer(client, mode);
        // place the player in the appropriate queue based on selected mode.
        this.matchmakingService.enqueue(player);
        const lobbyId = await this.matchmakingService.tryMatchPlayers(
            mode,
            this.server
        );
        if (lobbyId !== undefined) {
            const gameLobby = this.matchmakingService.gameLobby[lobbyId];
            // wait for 1/2 second before emitting the createLobby event
            setTimeout(() => {
                const username1 = gameLobby.player1.username;
                const username2 = gameLobby.player2.username;
                client.emit('createLobby', lobbyId, mode, username1, username2);
                gameLobby.player1.socket.emit(
                    'createLobby',
                    lobbyId,
                    mode,
                    username1,
                    username2
                );
                console.log(`Lobby ${lobbyId} created`);
            }, 500);
        }
    }

    @SubscribeMessage('sendInviteToPlay')
    async handleInviteToPlay(
        client: Socket,
        data: { targetId: number; mode: string }
    ): Promise<void> {
        const { targetId, mode } = data;
        // get the inviter client username in db
        const inviter = await this.prisma.user.findUnique({
            where: {
                socketId: client.id,
            },
        });
        // get the target client socket id in db
        const target = await this.prisma.user.findUnique({
            where: {
                id: targetId,
            },
        });
        // print the data received from the client
        console.log(
            'invite to play received from ' +
                inviter.username +
                ' to ' +
                target.socketId +
                ' in mode ' +
                mode
        );
        if (target.status === 'offline' || target.status === 'ingame') {
            client.emit('targetUnavailable', target.status);
        } else if (
            target.gameInvite === true ||
            target.blocked.includes(inviter.id)
        ) {
            client.emit('targetUnavailable', 'busy');
        } else {
            this.server
                .to(target.socketId)
                .emit('invitedToPlay', inviter.username, inviter.id, mode);
        }
    }

    @SubscribeMessage('replyGameInvite')
    async handleReplyGameInvite(
        client: Socket,
        data: { reply: boolean; from_id: number; mode: string }
    ): Promise<void> {
        const { reply, from_id, mode } = data;
        // send the reply to the client who sent the invite
        // get the 'from' client socket id in db
        const inviter = await this.prisma.user.findUnique({
            where: {
                id: from_id,
            },
        });
        console.log(
            'replyGameInvite received from ' +
                client.id +
                ' to ' +
                inviter.username +
                ' in mode ' +
                mode
        );
        this.server
            .to(inviter.socketId)
            .emit('repliedGameInvite', reply, client.id, mode);
    }

    @SubscribeMessage('cancelGameInvite')
    async handleCancelGameInvite(
        client: Socket,
        data: { target_id: number }
    ): Promise<void> {
        const { target_id } = data;
        // get the target client socket id in db
        const target = await this.prisma.user.findUnique({
            where: {
                id: target_id,
            },
        });
        // print the data received from the client
        console.log(
            'cancelGameInvite received from ' +
                client.id +
                ' to ' +
                target.username
        );
        this.server.to(target.socketId).emit('canceledGameInvite', client.id);
    }

    @SubscribeMessage('gameInviteOn')
    async handleGameInviteOn(client: Socket): Promise<void> {
        await this.prisma.user.update({
            where: {
                socketId: client.id,
            },
            data: {
                gameInvite: true,
            },
        });
    }

    @SubscribeMessage('gameInviteOff')
    async handleGameInviteOff(client: Socket): Promise<void> {
        await this.prisma.user.update({
            where: {
                socketId: client.id,
            },
            data: {
                gameInvite: false,
            },
        });
    }

    @SubscribeMessage('launchGameFromChat')
    async handleLaunchGameFromChat(
        client: Socket,
        data: { opp_SocketId: string; mode: string }
    ): Promise<void> {
        console.log(
            'launching game from chat between ' +
                client.id +
                ' and ' +
                data.opp_SocketId +
                ' in mode ' +
                data.mode
        );
        const { opp_SocketId, mode } = data;
        const opponent = this.server.sockets.sockets.get(opp_SocketId);
        const player1 = await this.createPlayer(client, mode);
        const player2 = await this.createPlayer(opponent, mode);
        const lobbyId = await this.matchmakingService.launchFromChat(
            player1,
            player2,
            mode,
            this.server
        );
        if (lobbyId !== undefined) {
            const gameLobby = this.matchmakingService.gameLobby[lobbyId];
            // wait for 1/2 second before emitting the createLobby event
            setTimeout(() => {
                const username1 = gameLobby.player1.username;
                const username2 = gameLobby.player2.username;
                console.log(`${username1} vs ${username2} lets goooo`);
                player1.socket.emit(
                    'createLobby',
                    lobbyId,
                    mode,
                    username1,
                    username2
                );
                player2.socket.emit(
                    'createLobby',
                    lobbyId,
                    mode,
                    username1,
                    username2
                );
                console.log(`Lobby ${lobbyId} created`);
            }, 500);
        }
    }

    @SubscribeMessage('launchBall')
    handleLaunchGame(client: Socket, data: { lobbyId: string }): void {
        const { lobbyId } = data;
        if (lobbyId === undefined || lobbyId === null) {
            return;
        }
        if (this.matchmakingService.gameLobby[lobbyId] === undefined) {
            return;
        }
        this.matchmakingService.gameLobby[lobbyId].resetBall();
    }

    @SubscribeMessage('movePaddle')
    handleMovePaddle(
        client: Socket,
        data: { lobbyId: string; direction: string }
    ): void {
        const { lobbyId, direction } = data;
        if (!lobbyId) return;
        const gameLobby = this.matchmakingService.gameLobby[lobbyId];
        const clientId = client.id;

        if (direction === 'up') {
            gameLobby.movePaddleUp(clientId);
        } else if (direction === 'down') {
            gameLobby.movePaddleDown(clientId);
        } else if (direction === 'stop') {
            gameLobby.stopPaddle(clientId);
        }
    }

    // Event to start game loop emitting game state to the client every 50ms
    @SubscribeMessage('getGameState')
    async handleGetGameState(
        client: any,
        id: { lobbyId: string }
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
        const gameLobby = this.matchmakingService.gameLobby[lobbyId];
        let gameState = gameLobby.getGameState();
        const player1 = gameLobby.player1;
        const player2 = gameLobby.player2;
        const gameId = gameLobby.gameId;
        // create a loop with a delay of 50ms
        this.intervals[lobbyId] = setInterval(async () => {
            if (lobbyId === undefined || lobbyId === null) {
                clearInterval(this.intervals[lobbyId]);
                delete this.intervals[lobbyId];
                return;
            }
            if (gameLobby === undefined || gameLobby === null) {
                clearInterval(this.intervals[lobbyId]);
                delete this.intervals[lobbyId];
                return;
            }
            gameLobby.updateGameState(); // Update the game state
            gameState = gameLobby.getGameState(); // Get the updated game state
            // check for game end
            if (gameLobby.player1.score === gameLobby.goalLimit) {
                this.handleUpdateDB(player1, player2, gameId);
                player1.socket.emit('gameEnd', player1.socket.id, false);
                player2.socket.emit('gameEnd', player1.socket.id, false);
                clearInterval(this.intervals[lobbyId]);
                delete this.intervals[lobbyId];
            } else if (gameLobby.player2.score === gameLobby.goalLimit) {
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
        delete this.matchmakingService.gameLobby[lobbyId];
    }

    @SubscribeMessage('locationChange')
    handleLocationChange(client: Socket, location: any): void {
        console.log('user goes to : ', location.pathname);
        // Check if a player was in a queue
        const player = this.matchmakingService.findPlayerBySocketId(client.id);
        if (player) {
            this.matchmakingService.dequeue(player);
            client.emit('leftQueue');
        }
        // Check if the client was part of an active game
        const lobbyId = this.findLobbyByClientId(client.id);
        if (lobbyId && location.pathname !== '/game') {
            this.handleForfait(client, { lobbyId });
        }
    }
}
