import * as React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useAuth } from './AuthContext';

type WebContext = {
  io: Socket;
};

type SocketContextProviderProps = {
  children: React.ReactNode;
};

export const SocketContext = createContext<WebContext | undefined>(undefined);

export default function SocketContextProvider(
  props: SocketContextProviderProps
) {
  const [socket, setSocket] = useState<WebContext>({} as WebContext);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) return;
    const newSocket: WebContext = {
      io: io("http://localhost:3333/", {
        reconnectionAttempts: 1,
        query: {
          token: sessionStorage.getItem("access_token"),
          username: user?.username,
        },
      }),
    };
    newSocket.io.on("connect_error", () => {
      logout();
    });
    setSocket(newSocket);
    console.log(newSocket.io.connected);
    return () => {
	  newSocket.io.off("connect_error");
      newSocket.io.disconnect();
    };
  }, [user && user.id]);

  const value = useMemo(() => socket, [socket]);

  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  const context = useContext(SocketContext);
  if (context == undefined) {
    throw new Error(
      "You need to use SocketContext with the SocketContextProvider"
    );
  }
  return context.io;
}
