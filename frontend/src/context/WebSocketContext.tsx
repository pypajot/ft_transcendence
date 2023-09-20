import * as React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useAuth } from "./AuthContext";

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
    const refreshSocket = async () => {
      const newSocket: WebContext = {
        io: io("http://localhost:3333/", {
          reconnectionAttempts: 1,
          query: {
            token: sessionStorage.getItem("access_token"),
            username: user?.username,
          },
        }),
      };
      newSocket.io.on("connect_error", async () => {
        logout();
      });

    useEffect(() => {
		const refreshSocket = async () => {
			
				let newSocket:WebContext = { io:io("http://localhost:3333/", {
					reconnectionAttempts: 1,
					query: {
						token: sessionStorage.getItem("access_token"),
						username: user?.username,
					},
				})};
				newSocket.io.on("connect_error", async () => {
					logout();
				})
				
				// const response = await fetch('http://localhost:3333/auth/refresh', {
				// 	method: 'GET',
				// 	headers: { 'Content-Type': 'application/json' },
				// 	credentials: 'include',
				// });
				// if (response.status !== 200) {
				// 	setUser(null);
				// 	setAccessToken(null);
				// 	sessionStorage.removeItem("access_token");
				// 	return ;
				// }
				// const token = (await response.json()).access_token;
				// sessionStorage.setItem("access_token", token);

				// newSocket.io.on("connect", () => {
				// 	console.log("test5", newSocket.io.connected);
				// });
				// if (newSocket.io.connected === false) {
				// 	console.log("test3")
				// 	const token = (await response.json()).access_token;
				// 	sessionStorage.setItem("access_token", token);
				// 	newSocket = { io:io("http://localhost:3333/", {
				// 		query: {
				// 			token: sessionStorage.getItem("access_token"),
				// 		},
				// 	})};
				// }
				setSocket(newSocket);
				console.log(newSocket.io.connected);
				return () => {
					newSocket.io.disconnect();
				}
		}
		if (!user)
			return ;
		const newSocket:WebContext = { io:io("http://localhost:3333/", {
			reconnectionAttempts: 1,
			query: {
				token: sessionStorage.getItem("access_token"),
			},
		})};
		newSocket.io.on("connect_error", () => {
			logout();
		})
		setSocket(newSocket);
		console.log(newSocket.io.connected);
		return () => {
			newSocket.io.disconnect();
		}
    }, [user && user.id]);

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
