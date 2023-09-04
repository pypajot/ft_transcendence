import { useState, useEffect } from 'react'
import { Message } from "../../../public/Types/message.entity"
import io, {Socket} from 'socket.io-client'
import MessageInput from './MessageInput'
import Messages from './Messages'
import LittleMessage from './LittleMessage'
import MessageTarget from './MessageTarget'

//Access Username by global cookies or something ?

const ChatComponent = () => {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<String[]>([])
    const [target, setTarget] = useState<String>("");


    useEffect(() => {
        const newSocket = io("http://localhost:3001/chat", {
            query: {
                username: localStorage.getItem("username"),
            },
        });
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        }
    }, [])
    const send = (value: string) =>
    {
        let message_content : String[] = [value, target];
        socket?.emit("message", message_content);
    }
    const messageListener = (message: string) => {
        setMessages([...messages, message]);
    }
    useEffect(() => {
        socket?.on("message", messageListener)
        return () => {
            socket?.off("message", messageListener)
        }
    }, [messageListener]);
    return (
        <>
        {" "}
        <MessageInput send={send}/>
        <Messages message={messages}/>
        <MessageTarget target={setTarget}/>
        <LittleMessage/>
        </>
    )
}

export default ChatComponent;