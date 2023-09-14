import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

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
  private lobbyId: string;
  public player1: Socket;
  public player2: Socket;
  private paddle1Y: number; // Position of paddle 1 (Player 1)
  private paddle2Y: number; // Position of paddle 2 (Player 2)
  private ballX: number; // Position of the ball along the X-axis
  private ballY: number; // Position of the ball along the Y-axis
  private ballSpeedX: number; // Ball movement speed along the X-axis
  private ballSpeedY: number; // Ball movement speed along the Y-axis
  public player1Score: number;
  public player2Score: number;
  private winner: string = '';

  // Properties for the game physics
  private readonly gameWidth: number = 800;
  private readonly gameHeight: number = 600;
  private readonly ballSize: number = 10;
  private ballSpeedXDirection: number = 0; // Ball movement direction along the X-axis (1 or -1)
  private ballSpeedYDirection: number = 0; // Ball movement direction along the Y-axis (1 or -1)
  private ballSpeedIncreaseFactor: number;
  private paddleWidth: number;
  private paddleHeight: number;
  private paddleMoveSpeed: number;

  // Properties for the game rules
  public goalLimit: number;
  private gameConfiguration: GameConfiguration;


  constructor() {}

  initGame(gameConfiguration: GameConfiguration, Player1: Socket, Player2: Socket, lobbyId: string): void {
    // Initialize the game state depending on the game mode
    console.log('Init game');
    this.lobbyId = lobbyId;
    this.gameConfiguration = gameConfiguration;
    this.player1 = Player1;
    this.player2 = Player2;
    this.paddle1Y = 250; // Set initial Y position for paddle 1 (Player 1)
    this.paddle2Y = 250; // Set initial Y position for paddle 2 (Player 2)
    this.ballX = 400; // Set initial X position for the ball
    this.ballY = 300; // Set initial Y position for the ball
    this.ballSpeedX = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the X-axis
    this.ballSpeedY = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the Y-axis
    this.ballSpeedIncreaseFactor = gameConfiguration.ballSpeedIncreaseFactor;
    this.player1Score = 0;
    this.player2Score = 0;
    this.paddleWidth = gameConfiguration.paddleWidth;
    this.paddleHeight = gameConfiguration.paddleHeight;
    this.paddleMoveSpeed = gameConfiguration.paddleMoveSpeed;
    this.goalLimit = gameConfiguration.goalLimit;
  }

  launchBall(): void {
    this.ballSpeedXDirection = 1;
    this.ballSpeedYDirection = 1;
  }
  // Add a method to get the current game state, which will be sent to the clients via WebSocket.
  getGameState(): GameState {
    return {
      player1: this.player1,
      player2: this.player2,
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
    if (clientId === this.player1.id) {
      if (this.paddle1Y >= 25) // prevents paddle from going off screen
        this.paddle1Y -= this.paddleMoveSpeed;
    }
    else if (clientId === this.player2.id) {
      if (this.paddle2Y >= 25)
        this.paddle2Y -= this.paddleMoveSpeed;
    }
  }
  movePaddleDown(clientId: string): void {
    if (clientId === this.player1.id) {
      if (this.paddle1Y <= this.gameHeight - this.paddleHeight - 10)
        this.paddle1Y += this.paddleMoveSpeed;
    } 
    else if (clientId === this.player2.id) {
      if (this.paddle2Y <= this.gameHeight - this.paddleHeight - 10)
        this.paddle2Y += this.paddleMoveSpeed;
    }
  }
  stopPaddle(clientId: string): void {
    if (clientId === this.player1.id) {
      this.paddle1Y = this.paddle1Y;
    } else if (clientId === this.player2.id) {
      this.paddle2Y = this.paddle2Y;
    }
  }
  // Method to update the game state based on physics and user input
  updateGameState(): void {
    // Move the ball based on its current speed and direction
    this.ballX += this.ballSpeedX * this.ballSpeedXDirection;
    this.ballY += this.ballSpeedY * this.ballSpeedYDirection;
    // Check for collisions with top and bottom walls
    if (this.ballY - this.ballSize / 2 <= 0 || this.ballY + this.ballSize / 2 >= this.gameHeight) {
      this.ballSpeedYDirection *= -1; // Reverse the Y-direction when the ball hits the top or bottom wall
    }
    // Check for collisions with the paddles
    if (
      (this.ballX - this.ballSize / 2 <= this.paddleWidth && this.ballY >= this.paddle1Y && this.ballY <= this.paddle1Y + this.paddleHeight) ||
      (this.ballX + this.ballSize / 2 >= this.gameWidth - this.paddleWidth - this.gameWidth/100 && this.ballY >= this.paddle2Y && this.ballY <= this.paddle2Y + this.paddleHeight)
    ) {
      // Reverse the X-direction and increase the ball speed after hitting a paddle
      this.ballSpeedXDirection *= -1;
      this.ballSpeedX *= this.ballSpeedIncreaseFactor;
    }
    // Check for scoring when the ball crosses the left or right boundary
    if (this.ballX - this.ballSize / 2 <= 0) {
      this.player2Score++;
      this.resetBall(); // Reset the ball to the center
    }
    else if (this.ballX + this.ballSize / 2 >= this.gameWidth) {
      this.player1Score++;
      this.resetBall(); // Reset the ball to the center
    }
  }

  // Method to reset the ball to the center after scoring or at the start of the game
  private resetBall(): void {
    this.ballX = this.gameWidth / 2;
    this.ballY = this.gameHeight / 2;
    this.ballSpeedX = this.gameConfiguration.ballSpeed; 
    this.ballSpeedY = this.gameConfiguration.ballSpeed;
    this.ballSpeedXDirection = Math.random() > 0.5 ? 1 : -1; // Randomize the initial X-direction
    this.ballSpeedYDirection = Math.random() > 0.5 ? 1 : -1; // Randomize the initial Y-direction
  }
}

// Define an interface for the game state data that will be sent to the clients.
export interface GameState {
  player1: Socket;
  player2: Socket;
  paddle1Y: number;
  paddle2Y: number;
  ballX: number;
  ballY: number;
  player1Score: number;
  player2Score: number;
  gameWidth: number;
  gameHeight: number;
}

