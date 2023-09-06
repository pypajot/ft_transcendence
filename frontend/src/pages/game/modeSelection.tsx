import { useState } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { Button, ButtonGroup } from '@twilio-paste/core';
import { LoadingIcon } from "@twilio-paste/icons/esm/LoadingIcon";
import './modeSelection.css';

const ModeSelection = () => {
  const socket = useSocketContext(); // Access the WebSocket context
  const [selectedMode, setSelectedMode] = useState(null);
  //const [isLoading, setIsLoading] = useState(false);
  //const [message, setMessage] = useState('');
  // Function to send the selected game mode to the backend
  const handleSelectedMode = (mode: any) => {
    socket?.emit('selectGameMode', mode); // Emit the selected mode to the backend
    setSelectedMode(mode); // Update the selected mode in the component state
    //setIsLoading(true);
    //setMessage(`In queue for ${mode} game... Waiting for another player`);

    // setTimeout(() => {
    //   setSelectedMode(mode);
    //   setIsLoading(false);
    // }, 2000);
  };

  return (
    <div className="mode-selection">
      <h1>Choose a Game Mode</h1>
      <ButtonGroup>
        <Button variant="secondary"
          onClick={() => handleSelectedMode('Classic')}>Classic
        </Button>
        <Button variant="secondary"
          onClick={() => handleSelectedMode('Party')}>Party
        </Button>
        <Button variant="secondary"
          onClick={() => handleSelectedMode('Hardcore')}>Hardcore
        </Button>
      </ButtonGroup>
      {/* {isLoading && (
        <div className="loading-message">
          <LoadingIcon size="sizeIcon70" decorative={false} title="In Queue..." />
      <p>{message}</p>
        </div>
      )} */}
      {!selectedMode && <p><br></br></p>}
      {selectedMode && <p>Selected Mode: {selectedMode}</p>}
    </div>
  );
};

export default ModeSelection;