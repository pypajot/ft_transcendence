import { useState, useEffect, useContext } from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'
import LittleMessage from './LittleMessage'
import MessageTarget from './MessageTarget'
import { useSocketContext } from '../../Context/socket-context'
import { Socket } from 'socket.io-client'

//Access Username by global cookies or something ?

const ChatComponent = () => {
    const [messages, setMessages] = useState<String[]>([])
    const [target, setTarget] = useState<String>("");
    const socket = useSocketContext();
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
        <MessageInput send={send}/>
        <Messages message={messages}/>
        <MessageTarget target={setTarget}/>
        <LittleMessage/>
        </>
    )
}

export default ChatComponent;