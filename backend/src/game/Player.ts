import { Socket } from 'socket.io';
//create a player class that will be used to create new players

export class Player {
  username: string;
  user_id: number;
  socket: Socket;
  score: number;
  gameMode: string;
  lobby: string;
  paddlePos: number;
  paddleDirection: string;
  paddleVelocity: number;

  constructor(
    socket: Socket,
    gameMode: string,
    username: string,
    user_id: number,
  ) {
    this.username = username;
    this.user_id = user_id;
    this.socket = socket;
    this.score = 0;
    this.gameMode = gameMode;
    this.lobby = '';
    this.paddleDirection = '';
    this.paddleVelocity = 0;
    this.paddlePos = 0;
  }
}
