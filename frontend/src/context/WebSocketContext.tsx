//here we will create a context for the websocket

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { io, Socket } from 'socket.io-client';

export const WebSocketContext = createContext<Socket | undefined>(undefined);

const WebSocketProvider: React.FC = ({ children }) => {
	  const [socket, setSocket] = useState<Socket>({} as Socket);

	  useEffect(() => {
		      const SocketClient = io('http://localhost:8000');
		      setSocket(SocketClient);

		      return () => SocketClient.close();
		    }, []);

	const value = useMemo(() => socket, [socket]);
	  return (
		      <WebSocketContext.Provider value={{ value }}>
		        {children}
		      </WebSocketContext.Provider>
		    );
};

export default WebSocketProvider;