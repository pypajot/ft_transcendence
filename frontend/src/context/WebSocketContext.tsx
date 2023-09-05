import React, { createContext, useEffect, useState, useMemo } from 'react';
import { io, Socket } from 'socket.io-client';

// define the children prop manually since it's not available after React 18
interface Props {
	children: React.ReactNode;
}

export const WebSocketContext = createContext<Socket | undefined>(undefined);

const WebSocketProvider: React.FC<Props> = ({ children }) => {
	// Create state to hold the WebSocket instance
	const [socket, setSocket] = useState<Socket>({} as Socket);

	// Establish a WebSocket connection when the component mounts
	useEffect(() => {
		// Create a WebSocket client instance and connect to the server
		const SocketClient = io('http://localhost:8000');
		
		setSocket(SocketClient); // Set the instance in the component's state
		
		return () => {SocketClient.close()}; //close the connection when the component unmounts
	}, []);

	// Memorize the WebSocket instance, preventing unnecessary re-renders
	const value = useMemo(() => socket, [socket]);

	
	return (
		<WebSocketContext.Provider value={value}>
			{children}
		</WebSocketContext.Provider>
	);
};

export default WebSocketProvider;