import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [message, setMessage] = useState('');

  const socket = io("http://localhost:8000");

  useEffect(() => {
      socket.on('message', (message) => {
      setMessage(message);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', 'Hello from the frontend!');
  };

  return (
    <div>
      <h1>Pong Game</h1>
      <p>{message}</p>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App;