import React, { useEffect, useState } from 'react';
import { useSocketContext } from '../../context/WebSocketContext.tsx';
import {GameState} from '../../../../backend/src/game/game.service.ts';
import './PongGame.css';
import { Button, ButtonGroup, Heading } from '@twilio-paste/core';
import { Link } from 'react-router-dom';
import { useGameContext } from '../../context/GameContext.tsx';

const PongGame : React.FC = () => {
  const socket = useSocketContext(); // Access the WebSocket context
  const [lobbyId, setLobbyId] = useState<string>(''); // The lobby ID to join
  const {gameStart, setGameStart} = useGameContext();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showGo, setShowGo] = useState(false);
  const [showBall, setShowBall] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);
  const [gameEndMessage, setGameEndMessage] = useState('');

  useEffect(() => {
    // Send custom event to request game state from the server
    socket?.on('createLobby', (lobbyId: string) => {
      setLobbyId(lobbyId);
      socket?.emit('getGameState', { lobbyId });
      setCountdown(3);
      setTimeout(() => { setCountdown(2)}, 1000);
      setTimeout(() => { setCountdown(1)}, 2000);
      setTimeout(() => { setShowGo(true)}, 3000);
      setTimeout(() => { socket?.emit('launchBall', { lobbyId })}, 3000);
    },);

    // Set up WebSocket event listener to receive the game state from the server
    socket?.on('gameState', (data) => {
      // update the game state
      setGameState(data);
    },);
    //add event listener for game end
    socket?.on('gameEnd', (data) => {
      // display game end message
      setGameEnd(true);
      setShowBall(false);
      if (data === socket?.id) {
        setGameEndMessage('You win!');
        console.log('LobbyId: ', lobbyId);
        setTimeout(() =>{socket?.emit('destroyLobby', { lobbyId })}, 1000);
      }
      else {
        setGameEndMessage('You lose!');
      }
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
    const direction = event.key === 'ArrowUp' ? 'up' : event.key === 'ArrowDown' ? 'down' : null;
    // Emit paddle movements to the server via WebSocket
    if (!gameEnd)
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
  }, [lobbyId, gameEnd]);

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
            <Button variant="secondary" onClick={() => {setGameStart(false)}}
            >Try again</Button>
          <Link to="/">
            <Button variant="secondary" onClick={() => {setGameStart(false)}}
            >Back to home</Button>
          </Link>
        </ButtonGroup>
        </div>
      )}
      {/* Render the ball */}
      {gameState && showBall && (
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

export default PongGame;