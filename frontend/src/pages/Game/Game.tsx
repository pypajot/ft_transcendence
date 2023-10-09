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
		setGameStart(false);
	}, []);
	// we use location to check if the user is coming from the chat invite
	// if so, render the game
	// if reload from game page, render the mode selection no matter what
	useEffect(() => {
		console.log ('location changed');
		const gameInProgress = localStorage.getItem('gameInProgress');
		if (gameInProgress !== 'true' && location?.state) {
			setGameStart(true);
		} 
		else { 
			setGameStart(false);
		}
	}, [location]);

	// we use beforeunload for the case where the user reloads the page
	// during game : it must not be able to reload the game
	useEffect(() => {
		window.addEventListener('beforeunload', handleBeforeUnload);
	
		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, []);
	
	const handleBeforeUnload = () => {
		setGameStart(false);
		localStorage.setItem('gameInProgress', 'true');
	};
	
	return (
		<div>
			{gameStart ? <PongGame /> : <ModeSelection />}
		</div>
	);
};

export default Game;
