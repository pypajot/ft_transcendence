import React, { useEffect, useState } from 'react';
import { useSocketContext } from '../../context/WebSocketContext.tsx';
import {GameState} from '../../../../backend/src/game/game.service.ts';
import './Game.css';
import { Button, ButtonGroup, Heading } from '@twilio-paste/core';
import { Link } from 'react-router-dom';

const Game : React.FC = () => {
  const socket = useSocketContext(); // Access the WebSocket context
  const [lobbyId, setLobbyId] = useState<string>(''); // The lobby ID to join
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showGo, setShowGo] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [gameEndMessage, setGameEndMessage] = useState('');

  useEffect(() => {
    // Send custom event to request game state from the server
    socket?.on('createLobby', (lobbyId: string) => {
      setLobbyId(lobbyId);
      setTimeout(() => { socket?.emit('getGameState', { lobbyId })}, 1000);
      setTimeout(() => { setCountdown(3)}, 1000);
      setTimeout(() => { setCountdown(2)}, 2000);
      setTimeout(() => { setCountdown(1)}, 3000);
      setTimeout(() => { setShowGo(true)}, 4000);
      setTimeout(() => { socket?.emit('launchBall', { lobbyId })}, 4000);
    },);

    // Set up WebSocket event listener to receive the game state from the server
    socket?.on('gameState', (data) => {
      // convert the game state to a JS object
      data = JSON.parse(data);
      // update the game state
      setGameState(data);
    },);
    //add event listener for game end
    socket?.on('gameEnd', (data) => {
      // display game end message
      if (data === socket?.id) {
        setGameEndMessage('You win!');
        setTimeout(() =>{socket?.emit('destroyLobby', { lobbyId })}, 1000);
      }
      else {
        setGameEndMessage('You lose!');
      }
      setGameEnd(true);
      setGameState(null);
    });

    return () => {
      socket?.off('createLobby');
      socket?.off('gameState');
      socket?.off('gameEnd');
    };
  }, [lobbyId]);

  // Other game logic and rendering based on the received gameState

  const handleKeyPress = (event: any) => {
    // Handle user input (e.g., arrow keys) for moving paddles
    const direction = event.key === 'ArrowUp' ? 'up' : event.key === 'ArrowDown' ? 'down' : 'stop';
    // Emit paddle movements to the server via WebSocket
    socket?.emit('movePaddle', { direction, lobbyId});
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
  }, [lobbyId]);

  return (
    <div className="game">
    <div className="scores-container">
          {/* Render scores */}
          {gameState && (
            <>
              <div className="score">Player 1: {gameState.player1Score}</div>
              <div className="score">Player 2: {gameState.player2Score}</div>
            </>
          )}
        </div>
    <div className="game-board">
      {countdown && <div className="countdown">{countdown}</div>}
      {showGo && <div className="go-message">GO!</div>}
      {gameEnd && (
        <div className="gameEnd">
        <Heading as='h6' variant='heading20'> {gameEndMessage}</Heading>
        <ButtonGroup>
          <Link to="/selectmode">
            <Button variant="secondary">Try again</Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">Back to home</Button>
          </Link>
        </ButtonGroup>
        </div>
      )}
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
    </div>
  </div>
  );
};

export default Game;
