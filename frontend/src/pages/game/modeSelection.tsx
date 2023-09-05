import { useState } from 'react';
import { WebSocketContext } from '../../context/WebSocketContext';
import { useContext } from 'react';

const ModeSelection = () => {
  const socket = useContext(WebSocketContext); // Access the WebSocket context
  const [selectedMode, setSelectedMode] = useState(null);

  // Function to send the selected game mode to the backend
  const sendSelectedMode = (mode: any) => {
    socket?.emit('selectGameMode', mode); // Emit the selected mode to the backend
    setSelectedMode(mode); // Update the selected mode in the component state
  };

  return (
    <div className="mode-selection">
      <h1>Choose a Game Mode</h1>
      <button onClick={() => sendSelectedMode('classic')}>Classic</button>
      <button onClick={() => sendSelectedMode('party')}>Party</button>
      <button onClick={() => sendSelectedMode('hardcore')}>Hardcore</button>

      {selectedMode && <p>Selected Mode: {selectedMode}</p>}
    </div>
  );
};

export default ModeSelection;