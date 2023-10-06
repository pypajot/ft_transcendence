import { Player } from './Player';

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

export class GameService {
    // Properties for the game state
    public gameId: number = 0; // Unique ID for the game
    public player1: Player | undefined = undefined;
    public player2: Player | undefined = undefined;
    private ballX: number = 0; // Position of the ball along the X-axis
    private ballY: number = 0; // Position of the ball along the Y-axis
    private ballSpeedX: number | undefined = undefined; // Ball movement speed along the X-axis
    private ballSpeedY: number | undefined = undefined; // Ball movement speed along the Y-axis

    // Properties for the game physics
    private readonly gameWidth: number = 600;
    private readonly gameHeight: number = 450;
    private readonly ballSize: number = 12;
    private ballSpeedXDirection = 0; // Ball movement direction along the X-axis (1 or -1)
    private ballSpeedYDirection = 0; // Ball movement direction along the Y-axis (1 or -1)
    private ballSpeedIncreaseFactor: number = 0;
    private paddleWidth: number = 0;
    private paddleHeight: number = 0;
    private paddleMoveSpeed: number = 0;

    // Properties for the game rules
    public goalLimit: number = 0;
    private gameConfiguration: GameConfiguration | undefined = undefined;

    constructor() {}

    async initGame(
        gameConfiguration: GameConfiguration,
        Player1: Player,
        Player2: Player
    ): Promise<void> {
        console.log('Init game');
        this.gameConfiguration = gameConfiguration;
        this.player1 = Player1;
        this.player2 = Player2;
        this.paddleWidth = gameConfiguration.paddleWidth;
        this.paddleHeight = gameConfiguration.paddleHeight;
        this.player1.paddlePos = this.gameHeight / 2 - this.paddleHeight / 2; // Set initial Y position for paddle 1 (Player 1)
        this.player2.paddlePos = this.gameHeight / 2 - this.paddleHeight / 2; // Set initial Y position for paddle 2 (Player 2)
        this.ballX = this.gameWidth / 2; // Set initial X position for the ball
        this.ballY = this.gameHeight / 2; // Set initial Y position for the ball
        this.ballSpeedX = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the X-axis
        this.ballSpeedY = gameConfiguration.ballSpeed; // Set the initial speed of the ball along the Y-axis
        this.ballSpeedIncreaseFactor =
            gameConfiguration.ballSpeedIncreaseFactor;
        this.paddleMoveSpeed = gameConfiguration.paddleMoveSpeed;
        this.goalLimit = gameConfiguration.goalLimit;
    }

    // Add a method to get the current game state, which will be sent to the clients via WebSocket.
    getGameState(): GameState {
        return {
            paddle1Y: this.player1?.paddlePos,
            paddle2Y: this.player2?.paddlePos,
            ballX: this.ballX,
            ballY: this.ballY,
            player1Score: this.player1?.score,
            player2Score: this.player2?.score,
            gameWidth: this.gameWidth,
            gameHeight: this.gameHeight,
        };
    }

    // Methods to move the paddles up and down
    movePaddleUp(clientId: string): void {
        const player =
            clientId === this.player1?.socket.id ? this.player1 : this.player2;
        if (player && player.paddlePos >= this.paddleMoveSpeed)
            player.paddleVelocity = -this.paddleMoveSpeed;
    }

    movePaddleDown(clientId: string): void {
        const player =
            clientId === this.player1?.socket.id ? this.player1 : this.player2;
        if (player && player?.paddlePos <=
            this.gameHeight - this.paddleHeight - this.paddleMoveSpeed
        ) {
            player.paddleVelocity = this.paddleMoveSpeed;
        }
    }

    stopPaddle(clientId: string | undefined): void {
        const player =
            clientId === this.player1?.socket.id ? this.player1 : this.player2;
        if (player) {
            player.paddleVelocity = 0;
        }
    }
    // Method to update the game state based on physics and user input
    updateGameState(): void {
        if (!this.player1 || !this.player2 || !this.gameConfiguration || !this.ballSpeedX || !this.ballSpeedY) {
            return;
        }
        const ballXVelocity = this.ballSpeedX * this.ballSpeedXDirection;
        const ballYVelocity = this.ballSpeedY * this.ballSpeedYDirection;
        const buffer = this.gameWidth / 100;
        const paddleRoom = this.gameHeight / 30;
        // Move the ball based on its current speed and direction
        this.ballX += ballXVelocity;
        this.ballY += ballYVelocity;
        // Move the paddles based on their velocities.
        this.player1.paddlePos += this.player1.paddleVelocity;
        this.player2.paddlePos += this.player2.paddleVelocity;

        // Ensure the paddles don’t move out of the game boundaries.
        this.player1.paddlePos = Math.max(
            paddleRoom,
            Math.min(
                this.gameHeight - this.paddleHeight - paddleRoom,
                this.player1.paddlePos
            )
        );
        this.player2.paddlePos = Math.max(
            paddleRoom,
            Math.min(
                this.gameHeight - this.paddleHeight - paddleRoom,
                this.player2.paddlePos
            )
        );

        // Check for ball collisions with top and bottom walls
        if (
            this.ballY - this.ballSize / 2 <= 0 ||
            this.ballY + this.ballSize / 2 >= this.gameHeight
        ) {
            this.ballSpeedYDirection *= -1; // Reverse the Y-direction when the ball hits the top or bottom wall
        }
        const collisionPaddle1 =
            this.ballX - this.ballSize / 2 + ballXVelocity <=
             this.paddleWidth + buffer - this.gameWidth / 100 &&
            this.ballY >= this.player1.paddlePos &&
            this.ballY <= this.player1.paddlePos + this.paddleHeight;
        const collisionPaddle2 =
            this.ballX + this.ballSize / 2 + ballXVelocity >=
                this.gameWidth - this.paddleWidth - buffer &&
            this.ballY >= this.player2.paddlePos &&
            this.ballY <= this.player2.paddlePos + this.paddleHeight;

        if (collisionPaddle1 || collisionPaddle2) {
            // console log informations about the ball, paddle and collision
            // Reverse the X-direction and increase the ball speed after hitting a paddle
            this.ballSpeedXDirection *= -1;
            this.ballSpeedX *= this.ballSpeedIncreaseFactor;
        }
        // Check for scoring when the ball crosses the left or right boundary
        if (this.ballX <= 0) {
            this.player2.score++;
            this.resetBall();
        } else if (this.ballX + this.ballSize >= this.gameWidth) {
            this.player1.score++;
            this.resetBall();
        }
    }

    // resets and launches the ball after a goal or at the start of the game
    resetBall(): void {
        this.ballX = this.gameWidth / 2;
        this.ballY = this.gameHeight / 2;
        this.ballSpeedX = this.gameConfiguration?.ballSpeed;
        this.ballSpeedY = this.gameConfiguration?.ballSpeed;
        this.ballSpeedXDirection = Math.random() > 0.5 ? 1 : -1;
        this.ballSpeedYDirection = Math.random() > 0.5 ? 1 : -1;
    }
}

// Interface definition for the game state data that will be sent to clients.
export interface GameState {
    paddle1Y: number | undefined;
    paddle2Y: number | undefined;
    ballX: number;
    ballY: number;
    player1Score: number | undefined;
    player2Score: number | undefined;
    gameWidth: number;
    gameHeight: number;
}
