import { Injectable } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GOAL_LIMIT, BALL_SPEED } from './const.game';


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
  private paddle1Y: number; // Position of paddle 1 (Player 1)
  private paddle2Y: number; // Position of paddle 2 (Player 2)
  private ballX: number; // Position of the ball along the X-axis
  private ballY: number; // Position of the ball along the Y-axis
  private ballSpeedX: number; // Ball movement speed along the X-axis
  private ballSpeedY: number; // Ball movement speed along the Y-axis
  private player1Score: number;
  private player2Score: number;

  // Properties for the game physics
  private readonly ballSize: number = 10;
  private ballSpeedXDirection: number = 1; // Ball movement direction along the X-axis (1 or -1)
  private ballSpeedYDirection: number = 1; // Ball movement direction along the Y-axis (1 or -1)
  private ballSpeedIncreaseFactor: number;
  private paddleWidth: number;
  private paddleHeight: number;
  private paddleMoveSpeed: number;

  // Properties for the game boundaries
  private readonly gameWidth: number = 800;
  private readonly gameHeight: number = 600;

  // Properties for the game rules
  private goalLimit: number;


  constructor(gameConfiguration: GameConfiguration) {
    this.initGame(gameConfiguration);
  }

  private initGame(gameConfiguration: GameConfiguration): void {
    // Initialize the game state depending on the game mode

    this.paddle1Y = 250; // Set initial Y position for paddle 1 (Player 1)
    this.paddle2Y = 250; // Set initial Y position for paddle 2 (Player 2)
    this.ballX = 400; // Set initial X position for the ball
    this.ballY = 300; // Set initial Y position for the ball
    this.ballSpeedX = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the X-axis
    this.ballSpeedY = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the Y-axis
    this.ballSpeedIncreaseFactor = gameConfiguration.ballSpeedIncreaseFactor;
    this.player1Score = 0; // Initialize Player 1's score to 0
    this.player2Score = 0; // Initialize Player 2's score to 0
    this.paddleWidth = gameConfiguration.paddleWidth;
    this.paddleHeight = gameConfiguration.paddleHeight;
    this.paddleMoveSpeed = gameConfiguration.paddleMoveSpeed;
    this.goalLimit = gameConfiguration.goalLimit;
  }

  @WebSocketServer()
  server: Server;

  // Add a method to emit the updated game state to all connected clients
  emitGameStateToClients(gameState: GameState): void {
    this.server.emit('gameState', gameState);
  }

  // Add a method to get the current game state, which will be sent to the clients via WebSocket.
  getGameState(): GameState {
    return {
      paddle1Y: this.paddle1Y,
      paddle2Y: this.paddle2Y,
      ballX: this.ballX,
      ballY: this.ballY,
      player1Score: this.player1Score,
      player2Score: this.player2Score,
      gameWidth: this.gameWidth,
      gameHeight: this.gameHeight,
    };
  }

  // Methods to move the paddles up and down, and to stop them.
  movePaddleUp(clientId: string): void {
    if (clientId === 'player1') {
      if (this.paddle1Y >= 25) /* prevents paddle from going off screen */
        this.paddle1Y -= 10;
    }
    else if (clientId === 'player2') {
      if (this.paddle2Y >= 25)
        this.paddle2Y -= 10;
    }
  }
  movePaddleDown(clientId: string): void {
    if (clientId === 'player1') {
      if (this.paddle1Y <= this.gameHeight - this.paddleHeight - 10)
        this.paddle1Y += this.paddleMoveSpeed;
    } 
    else if (clientId === 'player2') {
      if (this.paddle2Y <= this.gameHeight - this.paddleHeight - 10)
        this.paddle2Y += this.paddleMoveSpeed;
    }
  }
  stopPaddle(clientId: string): void {
    if (clientId === 'player1') {
      this.paddle1Y = this.paddle1Y;
    } else if (clientId === 'player2') {
      this.paddle2Y = this.paddle2Y;
    }
  }
  // Method to update the game state based on physics and user input
  updateGameState(gameConfiguration: GameConfiguration): void {
    // Move the ball based on its current speed and direction
    this.ballX += this.ballSpeedX * this.ballSpeedXDirection;
    this.ballY += this.ballSpeedY * this.ballSpeedYDirection;
    // Check for collisions with the game boundaries (top and bottom walls)
    if (this.ballY - this.ballSize / 2 <= 0 || this.ballY + this.ballSize / 2 >= this.gameHeight) {
      this.ballSpeedYDirection *= -1; // Reverse the Y-direction when the ball hits the top or bottom wall
    }
    // Check for collisions with the paddles
    if (
      (this.ballX - this.ballSize / 2 <= this.paddleWidth && this.ballY >= this.paddle1Y && this.ballY <= this.paddle1Y + this.paddleHeight) ||
      (this.ballX + this.ballSize / 2 >= this.gameWidth - this.paddleWidth && this.ballY >= this.paddle2Y && this.ballY <= this.paddle2Y + this.paddleHeight)
    ) {
      // Reverse the X-direction and increase the ball speed after hitting a paddle
      this.ballSpeedXDirection *= -1;
      this.ballSpeedX *= this.ballSpeedIncreaseFactor;
    }
  
    // Check for scoring when the ball crosses the left or right boundary
    if (this.ballX - this.ballSize / 2 <= 0) {
      this.player2Score++;
      this.resetBall(gameConfiguration); // Reset the ball to the center after scoring
    }
    else if (this.ballX + this.ballSize / 2 >= this.gameWidth) {
      this.player1Score++;
      this.resetBall(gameConfiguration); // Reset the ball to the center after scoring
    }
    // Check for end of game
    if (this.player1Score >= this.goalLimit || this.player2Score >= this.goalLimit) {
      // here we will handle the end of the game and reset the game state
      //this.initGame(gameConfiguration); // Reset the game state
    }
  }

  // Method to reset the ball to the center after scoring or at the start of the game
  private resetBall(gameConfiguration: GameConfiguration): void {
    this.ballX = this.gameWidth / 2;
    this.ballY = this.gameHeight / 2;
    this.ballSpeedX = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the X-axis
    this.ballSpeedY = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the Y-axis
    this.ballSpeedXDirection = Math.random() > 0.5 ? 1 : -1; // Randomize the initial X-direction
    this.ballSpeedYDirection = Math.random() > 0.5 ? 1 : -1; // Randomize the initial Y-direction
  }
}

// Define an interface for the game state data that will be sent to the clients.
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

