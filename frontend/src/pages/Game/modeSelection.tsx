import { useState} from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { LoadingIcon } from "@twilio-paste/icons/esm/LoadingIcon";
import { useGameContext } from '../../context/GameContext';
import './modeSelection.css';
import Navbar from '../../components/Navbar';

const ModeSelection = () => {
  const {socket} = useSocketContext(); // Access the WebSocket context
  const [selectedMode, setSelectedMode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const {gameStart, setGameStart} = useGameContext();
  // Function to send the selected game mode to the backend
  const handleSelectedMode = (mode: any) => {
    socket?.emit('selectGameMode', mode); // Emit the selected mode to the backend
    setSelectedMode(mode); // Update the selected mode in the component state
    setIsLoading(true);
    setMessage(`In queue for ${mode} game... Waiting for another player`);
    // Set up WebSocket event listener to receive the matched event from the server
    
    socket?.on('matched', () => {
      // redirect to game page
      // reset the selected mode and loading state
      setGameStart(true);
      setSelectedMode(null);
      setIsLoading(false);
      socket?.off('matched');
    });
  };

  return (
    <div>
      <Navbar/>
      <div className='choice'>
        <img src='https://i.imgur.com/9hzyEgH.png' className='choice-img'></img>
      </div>
      <div className='select-mode'>
        <button className='choose-button'
          onClick={() => handleSelectedMode('Classic')}
          >Classic
        </button>
        <button className='choose-button'
          onClick={() => handleSelectedMode('Party')}
          >Party
        </button>
        <button className='choose-button'
          onClick={() => handleSelectedMode('Hardcore')}
          >Hardcore
        </button>
      </div>
      <div className="game-selection-mode">
				<img src="https://i.imgur.com/vm7Rs68.gif" className="game-pong-selection-mode"/>
      </div>
      {isLoading && (
        <div className="loading-message">
          <LoadingIcon size="sizeIcon70" decorative={false} title="In Queue..." />
      <p>{message}</p>
      </div>
      )}
      {!selectedMode && <p><br></br></p>}
      {selectedMode && <p>Selected Mode: {selectedMode}</p>}
    </div>
  );
};

export default ModeSelection;