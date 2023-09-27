import React, { useEffect, useState, useRef } from 'react';
import { useSocketContext } from '../../context/WebSocketContext.tsx';
import { GameState } from '../../../../backend/src/game/game.service.ts';
import './PongGame.css';
import { Button, ButtonGroup, Heading } from '@twilio-paste/core';
import { Link } from 'react-router-dom';
import { useGameContext } from '../../context/GameContext.tsx';

const PongGame : React.FC = () => {
  const {socket} = useSocketContext(); // Access the WebSocket context
  const [lobbyId, setLobbyId] = useState<string>(''); // The lobby ID to join
  const {gameStart, setGameStart} = useGameContext();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showGo, setShowGo] = useState(false);
  const [showBall, setShowBall] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);
  const [gameEndMessage, setGameEndMessage] = useState('');
  const [userName1, setUserName1] = useState<string>('');
  const [userName2, setUserName2] = useState<string>('');

  useEffect(() => {
    // Send custom event to request game state from the server
    socket?.on('createLobby', (lobbyId: string, userName1: string, userName2: string) => {
      setLobbyId(lobbyId);
      setUserName1(userName1);
      setUserName2(userName2);
      socket?.emit('getGameState', { lobbyId });
      setCountdown(3);
      setTimeout(() => { setCountdown(2)}, 1000);
      setTimeout(() => { setCountdown(1)}, 2000);
      setTimeout(() => { setShowGo(true), setCountdown(null)}, 3000);
      setTimeout(() => { socket?.emit('launchBall', { lobbyId })}, 3000);
    },);
    // Set up WebSocket event listener to receive the game state from the server
    socket?.on('gameState', (data) => {
      // update the game state
      setGameState(data);
    });

    socket?.on('gameEnd', (data: any, forfait: boolean) => {
      handleGameEnd(data, forfait);
    });

        return () => {
            socket?.off('createLobby');
            socket?.off('gameState');
            socket?.off('gameEnd');
        };
    }, [lobbyId]);

    const handleKeyPress = (event: any) => {
        if (!gameEnd) {
            if (event.type === 'keydown') {
                if (event.keyCode === 38) {
                    socket?.emit('movePaddle', { lobbyId, direction: 'up' });
                }
                if (event.keyCode === 40) {
                    socket?.emit('movePaddle', { lobbyId, direction: 'down' });
                }
            } else if (event.type === 'keyup') {
                if (event.keyCode === 38 || event.keyCode === 40) {
                    socket?.emit('movePaddle', { lobbyId, direction: 'stop' });
                }
            }
        }
    };

  const handleGameEnd = (data: any, forfait: boolean) => {
    // display game end message
    setGameEnd(true);
    setShowBall(false);
    if (data === socket?.id) {
      if (forfait)
        setGameEndMessage('You win by forfait!');
      else
        setGameEndMessage('You win!');
      console.log('LobbyId: ', lobbyId);
      setTimeout(() =>{socket?.emit('destroyLobby', { lobbyId })}, 1000);
    }
    else {
      setGameEndMessage('You lose!');
    }
  }

    useEffect(() => {
        // Add event listener for user input (arrow keys)
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', handleKeyPress);

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
                        <div className="score">
                            {userName1}: {gameState.player1Score}
                        </div>
                        <div className="score">
                            {userName2}: {gameState.player2Score}
                        </div>
                    </>
                )}
            </div>
            <div className="game-board">
                {countdown && <div className="countdown">{countdown}</div>}
                {showGo && <div className="go-message">GO!</div>}
                {gameEnd && (
                    <div className="gameEnd">
                        <Heading as="h6" variant="heading20">
                            {' '}
                            {gameEndMessage}
                        </Heading>
                        <ButtonGroup>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setGameStart(false);
                                }}>
                                Try again
                            </Button>
                            <Link to="/">
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        setGameStart(false);
                                    }}>
                                    Back to home
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </div>
                )}
                {/* Render the ball */}
                {gameState && showBall && (
                    <div
                        className="ball"
                        style={{
                            top: `${
                                (gameState.ballY / gameState.gameHeight) * 100
                            }%`,
                            left: `${
                                (gameState.ballX / gameState.gameWidth) * 100
                            }%`,
                        }}
                    />
                )}
                {/* Render paddles */}
                {gameState && (
                    <>
                        <div
                            className="paddle paddle1"
                            style={{
                                top: `${
                                    (gameState.paddle1Y /
                                        gameState.gameHeight) *
                                    100
                                }%`,
                            }}
                        />
                        <div
                            className="paddle paddle2"
                            style={{
                                top: `${
                                    (gameState.paddle2Y /
                                        gameState.gameHeight) *
                                    100
                                }%`,
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default PongGame;
