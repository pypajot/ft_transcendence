import * as React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useAuth } from './AuthContext';

type WebContext = {
  socket: Socket | null;
  socketError: {func: string, msg: string} | null;
  setSocketError: React.Dispatch<React.SetStateAction<{func: string, msg: string} | null>>
};

type SocketContextProviderProps = {
  children: React.ReactNode;
};

export const SocketContext = createContext<WebContext>({} as WebContext);

export default function SocketContextProvider(
  props: SocketContextProviderProps
) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [socketError, setSocketError] = useState<{func: string, msg: string} | null>(null);
  const { user, setUser, logout } = useAuth();

  useEffect(() => {
	  if (!user) return;
	  console.log("test test test");
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
		setSocketError(msg);
	})
	newSocket.on("updateUser", (user) => {
		setUser((currentUser) => (
			currentUser && {
				...currentUser,
				username: user.username,
				avatar: user.avatar,
				socketId: user.socketId,
				twoFactorAuthActive: user.twoFactorAuthActive,
				friends: user.friends,
				friendsRequest: user.friendsRequest,
				blocked: user.blocked
			})
		);
	});
	console.log("socket context: ", user);

    return () => {
	  newSocket.off("connect_error");
	  newSocket.off("exception");
	  newSocket.off("updateUser");
      newSocket.disconnect();
    };
  }, [user?.id]);

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

