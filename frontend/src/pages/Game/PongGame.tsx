import React, { useEffect, useState, useRef } from 'react';
import { useSocketContext } from '../../context/WebSocketContext.tsx';
import { GameState } from '../../../../backend/src/game/game.service.ts';
import './PongGame.css';
import { Button } from '@twilio-paste/core';
import { Link } from 'react-router-dom';
import { useGameContext } from '../../context/GameContext.tsx';

const PongGame : React.FC = () => {
    const {socket} = useSocketContext(); // Access the WebSocket context
    const [lobbyId, setLobbyId] = useState<string>(''); // The lobby ID to join
    const {setGameStart} = useGameContext();
    const [gameMode, setGameMode] = useState<string>('');
    const [gameState, setGameState] = useState<GameState | null>(null);
    const [countdown, setCountdown] = useState<number | null>(null);
    const [showGo, setShowGo] = useState(false);
    const [showBall, setShowBall] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);
    const [gameEndMessage, setGameEndMessage] = useState('');
    const [userName1, setUserName1] = useState<string>('');
    const [userName2, setUserName2] = useState<string>('');
    const gameEndRef = useRef(gameEnd);

  useEffect(() => {
    gameEndRef.current = gameEnd; // update the ref value when gameEnd changes
  }, [gameEnd]);

  useEffect(() => {
    // Send custom event to request game state from the server
    socket?.on('createLobby', (lobbyId: string, mode: string, userName1: string, userName2: string) => {
        setLobbyId(lobbyId);
        setGameMode(mode);
        setUserName1(userName1);
        setUserName2(userName2);
        localStorage.setItem('gameInProgress', 'true');
        socket?.emit('getGameState', { lobbyId });
        setCountdown(3);
        setTimeout(() => { if (!gameEndRef.current) setCountdown(2)}, 1000);
        setTimeout(() => { if (!gameEndRef.current) setCountdown(1)}, 2000);
        setTimeout(() => { if (!gameEndRef.current) { setShowGo(true), setCountdown(null)}}, 3000);
        setTimeout(() => { 
            if (!gameEndRef.current) {
                socket?.emit('launchBall', { lobbyId }),
                setShowBall(true)
            }
        }, 3000);
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
    setShowGo(false);
    setCountdown(null);
    if (data === socket?.id) {
        if (forfait) {
          setGameEndMessage('You win by forfait!');
        }
        else {
          setGameEndMessage('You win!');
        }
        console.log('LobbyId: ', lobbyId);
        setTimeout(() =>{socket?.emit('destroyLobby', { lobbyId })}, 1000);
      }
      else {
        if (forfait) {
            setGameStart(false);
        }
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

    useEffect(() => {
        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
          
            let gameBoardWidth, gameBoardHeight;
          
            if (viewportWidth / viewportHeight > 4 / 3) {
              // If the viewport is wider than the 4:3 ratio, set the height to be the limiting factor
              gameBoardHeight = viewportHeight * 0.8;
              gameBoardWidth = (gameBoardHeight * 4) / 3;
            } 
            else {
              // If the viewport is narrower than the 4:3 ratio, set the width to be the limiting factor
              gameBoardWidth = viewportWidth * 0.8;
              gameBoardHeight = (gameBoardWidth * 3) / 4;
            }

            const fontSize = gameBoardWidth / 30; 
            const game = document.querySelector('.game') as HTMLElement;
            if (game) {
                game.style.fontSize = `${fontSize}px`;
            }
        
            const gameBoard = document.querySelector('.game') as HTMLElement;
            if (gameBoard) {
                gameBoard.style.width = `${gameBoardWidth}px`;
                gameBoard.style.height = `${gameBoardHeight}px`;
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            <div className={`game-board${gameMode === 'Party' ? ' party-border' : ' glow-medium'}`}>
                {countdown && <div className="countdown">{countdown}</div>}
                {showGo && <div className="go-message">GO!</div>}
                {gameEnd && (
                    <div className="gameEnd">
                        {/* <Heading as="h6" variant='heading20'>
                            {' '}
                            {gameEndMessage}
                        </Heading> */}
                        <h6 className="gameEndMessage">
                            {' '}
                            {gameEndMessage}
                        </h6>
                        {/* <ButtonGroup>
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
                        </ButtonGroup> */}
                            <div className="buttonGroup">
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
                            </div>
                    </div>
                )}
                {/* Render the ball */}
                {gameState && showBall && (
                    <div
                        className={`ball${gameMode === 'Party' ? ' party-ball' : ''}`}
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
                {gameState && gameState.paddle1Y !== undefined && 
                    gameState.paddle2Y !== undefined &&
                    (
                    <>
                        <div
                            className={`paddle paddle1${
                                gameMode === 'Party' ? ' party-paddle' : 
                                gameMode === 'Hardcore' ? ' hardcore-paddle' : ''
                            } glow-small`}
                            style={{
                                top: `${
                                    (gameState.paddle1Y /
                                        gameState.gameHeight) *
                                    100
                                }%`,
                            }}
                        />
                        <div
                            className={`paddle paddle2${
                                gameMode === 'Party' ? ' party-paddle' : 
                                gameMode === 'Hardcore' ? ' hardcore-paddle' : ''
                            } glow-small`}                            
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
