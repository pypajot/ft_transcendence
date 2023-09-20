import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Player } from './Player';
import { PrismaClient } from '@prisma/client';
import { interval } from 'rxjs';

export enum GameMode {
  Classic = 'Classic',
  Party = 'Party',
  Hardcore = 'Hardcore',
}

export interface GameConfiguration {
  mode: GameMode;
  goalLimit: number;
  ballSpeed: number;
  ballSpeedIncreaseFactor: number;
  paddleWidth: number;
  paddleHeight: number;
  paddleMoveSpeed: number;
}

@Injectable()
export class GameService {

  // Properties for the game state
  public gameId: number; // Unique ID for the game
  public player1: Player;
  public player2: Player;
  private paddle1Y: number; // Position of paddle 1 (Player 1)
  private paddle2Y: number; // Position of paddle 2 (Player 2)
  private ballX: number; // Position of the ball along the X-axis
  private ballY: number; // Position of the ball along the Y-axis
  private ballSpeedX: number; // Ball movement speed along the X-axis
  private ballSpeedY: number; // Ball movement speed along the Y-axis

  // Properties for the game physics
  private readonly gameWidth: number = 600;
  private readonly gameHeight: number = 450;
  private readonly ballSize: number = 12;
  private ballSpeedXDirection: number = 0; // Ball movement direction along the X-axis (1 or -1)
  private ballSpeedYDirection: number = 0; // Ball movement direction along the Y-axis (1 or -1)
  private ballSpeedIncreaseFactor: number;
  private paddleWidth: number;
  private paddleHeight: number;
  private paddleMoveSpeed: number;

  // Properties for the game rules
  public goalLimit: number;
  private gameConfiguration: GameConfiguration;

  private prisma = new PrismaClient();

  constructor() {}

  async initGame(gameConfiguration: GameConfiguration, Player1: Player, Player2: Player, lobbyId: string): Promise<void> {
    // Initialize the game state depending on the game mode
    const game = await this.prisma.game.create({
      data: {
        players: {
          connect: [{ id: Player1.user_id },
          { id: Player2.user_id }],
        },
        mode: gameConfiguration.mode,
      },
    });
    await this.prisma.user.update({
      where: {
        id: Player1.user_id
      },
      data: {
        status: 'ingame',
      }
    })
    await this.prisma.user.update({
      where: {
        id: Player2.user_id
      },
      data: {
        status: 'ingame',
      }
    })
    this.gameId = game.id;
    console.log('Init game');
    this.gameConfiguration = gameConfiguration;
    this.player1 = Player1;
    this.player2 = Player2;
    this.paddleWidth = gameConfiguration.paddleWidth;
    this.paddleHeight = gameConfiguration.paddleHeight;
    this.paddle1Y = (this.gameHeight / 2) - (this.paddleHeight / 2); // Set initial Y position for paddle 1 (Player 1)
    this.paddle2Y = (this.gameHeight / 2) - (this.paddleHeight / 2); // Set initial Y position for paddle 2 (Player 2)
    this.ballX = this.gameWidth / 2; // Set initial X position for the ball
    this.ballY = this.gameHeight / 2; // Set initial Y position for the ball
    this.ballSpeedX = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the X-axis
    this.ballSpeedY = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the Y-axis
    this.ballSpeedIncreaseFactor = gameConfiguration.ballSpeedIncreaseFactor;
    this.paddleMoveSpeed = gameConfiguration.paddleMoveSpeed;
    this.goalLimit = gameConfiguration.goalLimit;
  }

  // Add a method to get the current game state, which will be sent to the clients via WebSocket.
  getGameState(): GameState {
    return {
      paddle1Y: this.paddle1Y,
      paddle2Y: this.paddle2Y,
      ballX: this.ballX,
      ballY: this.ballY,
      player1Score: this.player1.score,
      player2Score: this.player2.score,
      gameWidth: this.gameWidth,
      gameHeight: this.gameHeight,
    };
  }

  // Methods to move the paddles up and down
  movePaddleUp(clientId: string): void {
    if (clientId === this.player1.socket.id) {
      if (this.paddle1Y >= this.paddleMoveSpeed) // prevents paddle from going off screen
        this.paddle1Y -= this.paddleMoveSpeed;
    }
    else if (clientId === this.player2.socket.id) {
      if (this.paddle2Y >= this.paddleMoveSpeed)
        this.paddle2Y -= this.paddleMoveSpeed;
    }
  }
  movePaddleDown(clientId: string): void {
    if (clientId === this.player1.socket.id) {
      if (this.paddle1Y <= (this.gameHeight - this.paddleHeight - this.paddleMoveSpeed))
        this.paddle1Y += this.paddleMoveSpeed;
    } 
    else if (clientId === this.player2.socket.id) {
      if (this.paddle2Y <= (this.gameHeight - this.paddleHeight - this.paddleMoveSpeed))
        this.paddle2Y += this.paddleMoveSpeed;
    }
  }
  // Method to update the game state based on physics and user input
  updateGameState(): void {
    // Move the ball based on its current speed and direction
    const ballXVelocity = this.ballSpeedX * this.ballSpeedXDirection;
    const ballYVelocity = this.ballSpeedY * this.ballSpeedYDirection;
    this.ballX += ballXVelocity;
    this.ballY += ballYVelocity;
    // Check for collisions with top and bottom walls
    if (this.ballY - this.ballSize / 2 <= 0 || this.ballY + this.ballSize / 2 >= this.gameHeight) {
      this.ballSpeedYDirection *= -1; // Reverse the Y-direction when the ball hits the top or bottom wall
    }
    const collisionPaddle1 = this.ballX - this.ballSize / 2 + ballXVelocity <= this.paddleWidth && this.ballY + ballYVelocity >= this.paddle1Y && this.ballY + ballYVelocity <= this.paddle1Y + this.paddleHeight;
    const collisionPaddle2 = this.ballX + this.ballSize / 2 + ballXVelocity >= this.gameWidth - this.paddleWidth - (this.gameWidth / 100) && this.ballY + ballYVelocity >= this.paddle2Y && this.ballY + ballYVelocity <= this.paddle2Y + this.paddleHeight;
    // Check for collisions with the paddles
    if (collisionPaddle1 || collisionPaddle2) {
      // Reverse the X-direction and increase the ball speed after hitting a paddle
      this.ballSpeedXDirection *= -1;
      this.ballSpeedX *= this.ballSpeedIncreaseFactor;
    }
    // Check for scoring when the ball crosses the left or right boundary
    if (this.ballX <= 0) {
      this.player2.score++;
      this.resetBall();
    }
    else if (this.ballX + this.ballSize >= this.gameWidth) {
      this.player1.score++;
      this.resetBall();
    }
  }

  // resets and launches the ball after a goal or at the start of the game
  resetBall(): void {
    this.ballX = this.gameWidth / 2;
    this.ballY = this.gameHeight / 2;
    this.ballSpeedX = this.gameConfiguration.ballSpeed;
    this.ballSpeedY = this.gameConfiguration.ballSpeed;
    this.ballSpeedXDirection = Math.random() > 0.5 ? 1 : -1;
    this.ballSpeedYDirection = Math.random() > 0.5 ? 1 : -1;
  }
}

// Interface definition for the game state data that will be sent to clients.
export interface GameState {
  paddle1Y: number;
  paddle2Y: number;
  ballX: number;
  ballY: number;
  player1Score: number;
  player2Score: number;
  gameWidth: number;
  gameHeight: number;
}
