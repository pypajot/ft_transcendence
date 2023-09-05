import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/game/Game';
import './App.css';
import Home from './pages/Home/Home';
import WebSocketProvider from './context/WebSocketContext';

const App: React.FC = () => {

  return (
    <WebSocketProvider>
      <Router>
        <div className="game">
          <h1>Pong Game</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </WebSocketProvider>
  );
};

export default App;
