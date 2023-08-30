import { useState, useEffect } from 'react'
import { Message } from "../../../public/Types/message.entity"
import io, {Socket} from 'socket.io-client'
import MessageInput from './MessageInput'
import Messages from './Messages'

const ChatComponent = () => {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<Message[]>([])

    const send = (value: string) =>
    {
        socket?.emit("message", value)
    }
    useEffect(() => {
        const newSocket = io("http://localhost:3001/chat")
        setSocket(newSocket)
    }, [setSocket])

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
        </>
    )
}

export default ChatComponent;