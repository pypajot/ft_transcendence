import { useState, useEffect } from 'react'
import { Message } from "../../../public/Types/message.entity"
import io, {Socket} from 'socket.io-client'
import MessageInput from './MessageInput'
import Messages from './Messages'
import LittleMessage from './LittleMessage'

//Access Username by global cookies or something ?
const newSocket = io("http://localhost:3001/chat", {
    query: {
        username: "nice",
      },
});

const ChatComponent = () => {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<Message[]>([])

    const send = (value: string) =>
    {
        socket?.emit("message", value)
    }
    useEffect(() => {
        setSocket(newSocket)
    }, [])

    const messageListener = (message: Message) => {
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
        <LittleMessage/>
        </>
    )
}

export default ChatComponent;