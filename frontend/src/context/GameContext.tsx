import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useSocketContext } from './WebSocketContext';

type GameContextType = {
  gameStart: boolean;
  partyBackground: string;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

type GameProviderProps = {
  children: ReactNode;
};

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [gameStart, setGameStart] = useState(false);
  const [partyBackground, setPartyBackground] = useState<string>("")
  const {socket} = useSocketContext();

  useEffect(() => {
	if (!socket)
		return ;
	socket?.emit("getPartyBackground");
	socket?.on("getPartyBackground", (url: string) => {
		setPartyBackground(url);
	});
	return (() => {
		socket?.off("getPartyBackground");
	})
  }, [socket])

  return (
    <GameContext.Provider value={{ gameStart, setGameStart, partyBackground
	}}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
