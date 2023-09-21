import React, { useEffect, useState } from 'react';
import PongGame from './PongGame';
import ModeSelection from './modeSelection';
import { useGameContext } from '../../context/GameContext';

// Game component to render ether the game or the select mode page

const Game : React.FC = () => {
	const {gameStart, setGameStart} = useGameContext();

	useEffect(() => {
		setGameStart(false);
	}, []);
	return (
		<div>
			{gameStart ? <PongGame /> : <ModeSelection />}
		</div>
	);
};

export default Game;