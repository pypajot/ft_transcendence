import * as React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useAuth } from './AuthContext';

type WebContext = {
  socket: Socket | null;
  socketError: string | null;
  setSocketError: React.Dispatch<React.SetStateAction<string | null>>
};

type SocketContextProviderProps = {
  children: React.ReactNode;
};

export const SocketContext = createContext<WebContext>({} as WebContext);

export default function SocketContextProvider(
  props: SocketContextProviderProps
) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [socketError, setSocketError] = useState<string | null>(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) return;
    const newSocket = io("http://localhost:3333/", {
        reconnectionAttempts: 1,
        query: {
          token: sessionStorage.getItem("access_token"),
          username: user?.username,
        },
      });
    newSocket.on("connect_error", () => {
      logout();
    });
    setSocket(newSocket);
	newSocket.on("exception", (msg) => {
		console.log(msg.message);
	})

    console.log(newSocket.connected);
    return () => {
	  newSocket.off("connect_error");
	  newSocket.off("exception");
      newSocket.disconnect();
    };
  }, [user && user.id]);

  const value = useMemo(() => ({
	socket,
	socketError,
	setSocketError,
  }), [socket, socketError, setSocketError]);

  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
}

export const useSocketContext = () =>  useContext(SocketContext);

