import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

export interface ChatSocketContextState{
    socket: Socket;
}

export const ChatSocketContext=
createContext<ChatSocketContextState>( {} as ChatSocketContextState
);

export const useChatSocketContext = () =>
{
    useContext(ChatSocketContext);
}