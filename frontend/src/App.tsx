import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import Game from './pages/game/Game';
import './App.css';

const App: React.FC = () => {
  const socket = io("http://localhost:8000");

  return (
    <Router>
      <div className="game">
        <h1>Pong Game</h1>
        <Routes>
          <Route path="/game" element={<Game socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
