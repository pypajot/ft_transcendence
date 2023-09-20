import { ReactNode, useRef } from "react";
import { io } from "socket.io-client";
import { ChatSocketContext } from "./ChatSocketContext";

const ChatSocketContextProvider = (props: {children ?: ReactNode}) => {
    const socketRef = useRef(io({ autoConnect: false
    
    })
    );
    return (
        <ChatSocketContext.Provider value={{ socket: socketRef.current}}>
            {props.children}
        </ChatSocketContext.Provider>
    )
}
export default ChatSocketContextProvider;