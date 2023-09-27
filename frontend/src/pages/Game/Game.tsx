import React, { useEffect, useState } from 'react';
import PongGame from './PongGame';
import ModeSelection from './modeSelection';
import { useSocketContext } from '../../context/WebSocketContext';
import { useGameContext } from '../../context/GameContext';
import { useLocation } from 'react-router-dom';

// Game component to render ether the game or the select mode page

const Game : React.FC = () => {
	const {gameStart, setGameStart} = useGameContext();
	const location = useLocation();

	useEffect(() => {
		setGameStart(false);
	}, []);
	useEffect(() => {
		if (location?.state) {
			setGameStart(true);
		}
	}, [location]);
	return (
		<div>
			{gameStart ? <PongGame /> : <ModeSelection />}
		</div>
	);
};

export default Game;
