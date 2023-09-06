import React from 'react';
import './Chat.css';
import Navbar from '../../components/Navbar';

const Chat = () => {
	return (
		<>
		<Navbar />
		<div className="App">
			<header className="App-header">
				<p>
				Chat
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

export default Chat;