import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/game/Game';
import './App.css';
import Home from './pages/Home/Home';
import WebSocketProvider from './context/WebSocketContext';
import { GameProvider } from './context/GameContext';

const App: React.FC = () => {

  return (
   
      <Router>
        <div className="game">
          <h1>Pong Game</h1>
          <GameProvider>
          <WebSocketProvider>
          <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
          </WebSocketProvider>
          </GameProvider>
        
        </div>
      </Router>
  );
};

export default App;
