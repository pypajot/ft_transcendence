import React, { useEffect } from 'react';
import PongGame from './PongGame';
import ModeSelection from './modeSelection';
import { useGameContext } from '../../context/GameContext';
import { useLocation } from 'react-router-dom';

// Game component to render ether the game or the select mode page

const Game : React.FC = () => {
	const {gameStart, setGameStart} = useGameContext();
	const location = useLocation();
	
	useEffect(() => {
		console.log ('comp mount : game start set to false');
		setGameStart(false);
	}, []);
	// we use location to check if the user is coming from the chat invite
	// if so, render the game
	// if reload from game page, render the mode selection no matter what
	useEffect(() => {
		console.log ('location changed');
		if (sessionStorage.getItem('gameInProgress') !== 'true' && location?.state) {
			console.log ('set game start to true');
			setGameStart(true);
		} 
		else { 
			console.log ('set game start to false');
			setGameStart(false);
		}
	}, [location]);
	
	return (
		<div>
			{gameStart ? <PongGame /> : <ModeSelection />}
		</div>
	);
};

export default Game;
