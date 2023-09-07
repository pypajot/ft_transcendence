import * as React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Socket, io } from "socket.io-client";


type WebContext = {
    io: Socket;
}

type SocketContextProviderProps = {
    children: React.ReactNode;
};

export const SocketContext = createContext<WebContext | undefined>(undefined);

export default function SocketContextProvider(props: SocketContextProviderProps){

    const [socket, setSocket] = useState<WebContext>({} as WebContext);

    useEffect(() => {
        const newSocket:WebContext = { io:io("http://localhost:3333/game", {
            query: {
                username: localStorage.getItem("username"),
            },
        })};
            setSocket(newSocket);
            return () => {
                newSocket.io.disconnect();
            }
    }, []);
    const value = useMemo(() => socket, [socket]);
    return (
        <SocketContext.Provider value={value}>
            {props.children}
        </SocketContext.Provider>
    )
}

export function useSocketContext() {
    const context = useContext(SocketContext);
    if (context == undefined)
    {
        throw new Error("You need to use SocketContext with the SocketContextProvider");
    }
    return context.io;
} 