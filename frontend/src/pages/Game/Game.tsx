import React, { useEffect, useState } from 'react';
import PongGame from './PongGame';
import ModeSelection from './modeSelection';
import { useSocketContext } from '../../context/WebSocketContext';
import { useGameContext } from '../../context/GameContext';

// Game component to render ether the game or the select mode page

const Game : React.FC = () => {
	//const socket = useSocketContext(); // Access the WebSocket context
	const {gameStart, setGameStart} = useGameContext();

	// useEffect(() => {
	// 	// Set up WebSocket event listener to receive the matched event from the server
	// 	socket?.on('matched', () => {
	// 		// redirect to game page
	// 		setGameStart(true);
	// 		socket?.off('matched');
	// 	});
	// }, []);
	return (
		<div>
			{gameStart ? <PongGame /> : <ModeSelection />}
		</div>
	);
};

export default Game;