import React, { KeyboardEvent, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import {GameState} from '../../../../backend/src/game/game.service.ts';
import './Game.css';
//import { EventListener } from 'react';

const socket = io('http://localhost:8000');

interface GameProps {
  socket: Socket;
}

const Game : React.FC<GameProps> = ({ socket }) => {
  const [gameState, setGameState] = useState<GameState | null>(null);

  useEffect(() => {
    // Send custom event to request game state from the server
    socket.emit('getGameState');

    // Set up WebSocket event listener to receive the game state from the server
    socket.on('gameState', (data) => {
      setGameState(data);
    });

    return () => {
      socket.off('gameState');
    };
  }, []);

  // Other game logic and rendering based on the received gameState

  const handleKeyPress = (event: any) => {
    // Handle user input (e.g., arrow keys) for moving paddles
    // Emit paddle movements to the server via WebSocket
    const direction = event.key === 'ArrowUp' ? 'up' : event.key === 'ArrowDown' ? 'down' : 'stop';
    socket.emit('movePaddle', { direction });
  };

  useEffect(() => {
    // Add event listener for user input (arrow keys)

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyPress);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div className="container">
      {/* Render the ball */}
      {gameState && (
        <div
          className="ball"
          style={{
            top: `${(gameState.ballY / gameState.gameHeight) * 100}%`,
            left: `${(gameState.ballX / gameState.gameWidth) * 100}%`,
          }}
        />
      )}

      {/* Render paddles */}
      {gameState && (
        <>
          <div
            className="paddle paddle1"
            style={{ top: `${(gameState.paddle1Y / gameState.gameHeight) * 100}%` }}
          />
          <div
            className="paddle paddle2"
            style={{ top: `${(gameState.paddle2Y / gameState.gameHeight) * 100}%` }}
          />
        </>
      )}

      {/* Render scores */}
      {gameState && (
        <>
          <div className="score score1">Player 1: {gameState.player1Score}</div>
          <div className="score score2">Player 2: {gameState.player2Score}</div>
        </>
      )}
    </div>
  );
};

export default Game;
