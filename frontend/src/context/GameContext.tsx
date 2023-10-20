import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useSocketContext } from './WebSocketContext';

type GameContextType = {
  gameStart: boolean;
  partyBackground: string;
  gameInvite: boolean;
  inviter: string;
  inviter_id: number;
  mode: string;
  counter: number;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  setGameInviteState: React.Dispatch<React.SetStateAction<GameInvite>>;
  clearGameInvite: () => void;
};

type GameInvite = {
  gameInvite: boolean;
  inviter: string;
  inviter_id: number;
  mode: string;
  counter: number;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

type GameProviderProps = {
  children: ReactNode;
};

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [gameStart, setGameStart] = useState(false);
  const [partyBackground, setPartyBackground] = useState<string>("")
  const {socket} = useSocketContext();
  const [gameInviteState, setGameInviteState] = useState<GameInvite>({
    gameInvite: false,
    inviter: '',
    inviter_id: 0,
    mode: '',
    counter: 0,
  });

  const clearGameInvite = () => {
    setGameInviteState({
      gameInvite: false,
      inviter: '',
      inviter_id: 0,
      mode: '',
      counter: 0,
    });
  }

  useEffect(() => {
  
    if (!socket)
      return ;
  
    socket?.emit("getPartyBackground");
    socket?.on("getPartyBackground", (url: string) => {
      setPartyBackground(url);
    });

    const handleInvite = (opp_username: string, opp_id: number, mode: string) => {
      setGameInviteState(prevState => ({
        gameInvite: true,
        inviter: opp_username,
        inviter_id: opp_id,
        mode: mode,
        counter: prevState.counter + 1,
      }));
    };

    socket?.on('invitedToPlay', handleInvite);
  
    return (() => {
      socket?.off("getPartyBackground");
      socket?.off('invitedToPlay', handleInvite);
    })
  }, [socket])

  return (
    <GameContext.Provider value={{
      gameStart,
      setGameStart,
      partyBackground,
      gameInvite: gameInviteState.gameInvite,
      inviter: gameInviteState.inviter,
      inviter_id: gameInviteState.inviter_id,
      mode: gameInviteState.mode,
      counter: gameInviteState.counter,
      setGameInviteState,
      clearGameInvite,
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
