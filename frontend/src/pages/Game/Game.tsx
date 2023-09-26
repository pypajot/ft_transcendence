import React, { useEffect, useState } from 'react';
import PongGame from './PongGame';
import ModeSelection from './modeSelection';
import { useSocketContext } from '../../context/WebSocketContext';
import { useGameContext } from '../../context/GameContext';

// Game component to render ether the game or the select mode page

const Game : React.FC = () => {
	//const socket = useSocketContext(); // Access the WebSocket context
	const {gameStart, setGameStart} = useGameContext();

	useEffect(() => {
		// reset gameStart state when component unmounts
		return () => {
			setGameStart(false);
		};
	}
	, []);

	return (
		<div>
			{gameStart ? <PongGame /> : <ModeSelection />}
		</div>
	);
};

export default Game;