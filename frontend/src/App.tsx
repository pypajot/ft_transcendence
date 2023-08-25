import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import Game from './game/Game';

const App: React.FC = () => {
  const socket = io("http://localhost:8000");

  return (
    <Router>
      <div>
        <h1>Pong Game</h1>
        <Routes>
          <Route path="/game" element={<Game socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// const App = () => {
//   const [message, setMessage] = useState('');

//   const socket = io("http://localhost:8000");

//   useEffect(() => {
//       socket.on('message', (message) => {
//       setMessage(message);
//     });

//     return () => {
//       socket.off('message');
//     };
//   }, []);

//   const sendMessage = () => {
//     socket.emit('message', 'Hello from the frontend!');
//   };

//   return (
//     <div>
//       <h1>Pong Game</h1>
//       <p>{message}</p>
//       <button onClick={sendMessage}>Send Message</button>
//     </div>
//   );
// };

// export default App;