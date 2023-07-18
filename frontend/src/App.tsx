import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io("");

const App = () => {
  const [message, setMessage] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the server');
      setConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
      setConnected(false);
    });

    socket.on('message', (message) => {
      setMessage(message);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', 'Hello from the frontend!');
  };

  return (
    <div>
      <h1>Pong Game</h1>
      {connected ? (
        <p>Connected to the server</p>
      ) : (
        <p>Disconnected from the server</p>
      )}
      <p>{message}</p>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App;