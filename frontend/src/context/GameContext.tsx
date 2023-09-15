import React, { createContext, useContext, useState, ReactNode } from 'react';

type GameContextType = {
  gameStart: boolean;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

type GameProviderProps = {
  children: ReactNode;
};

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [gameStart, setGameStart] = useState(false);

  return (
    <GameContext.Provider value={{ gameStart, setGameStart }}>
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
