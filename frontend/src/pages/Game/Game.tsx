import React from 'react';
import './Game.css';
import Navbar from '../../components/Navbar';

const Game = () => {
	return (
		<>
		<Navbar />
		<div className="App">
			<header className="App-header">
				<p>
				Game
				</p>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Learn React
				</a>
			</header>
		</div>
		</>
	);
	
};

export default Game;