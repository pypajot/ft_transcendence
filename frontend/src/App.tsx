import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/game/Game';
import ModeSelection from './pages/game/modeSelection';
import './App.css';
import Home from './pages/Home/Home';
import WebSocketProvider from './context/WebSocketContext';

const App: React.FC = () => {

  return (
   
      <Router>
        <div className="game">
          <h1>Pong Game</h1>
          <WebSocketProvider>
          <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/selectmode" element={<ModeSelection />} />
            <Route path="/game" element={<Game />} />

          </Routes>
          </WebSocketProvider>
        
        </div>
      </Router>
  );
};

export default App;
