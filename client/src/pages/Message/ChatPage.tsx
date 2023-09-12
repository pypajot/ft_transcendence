import { useState, useEffect } from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'
import LittleMessage from './LittleMessage'
import MessageTarget from './MessageTarget'
import { useSocketContext } from '../../Context/socket-context'
import { ChannelComponent } from './ChannelComponent'
import { Conversation } from './Conversation'
import Contact from './Contact'
import { Box, Flex } from '@twilio-paste/core'

//Access Username by global cookies or something ?


const ChatComponent = () => {
    const [messages, setMessages] = useState<String[]>([])
    const [target, setTarget] = useState<String>("");
    const [channelTarget, setChannelTarget] = useState<string>("")
    const [messagesChan, setMessageChan] = useState<String[]>([])
    const [contact, setContact] = useState<string>("");
    const socket = useSocketContext();

    useEffect(() => {
        socket?.emit("JoinChannel", channelTarget);
    }, [channelTarget]);

    const send = (value: string) =>
    {
        let message_content : String[] = [value, target];
        socket?.emit("message", message_content);
    }
    const sendToChannel = (message: string) =>
    {
        const eventContent: string[] = [channelTarget, message];
        socket?.emit("ChannelMessage", eventContent)
    }
    const messageChanListener = (message:string) => {
        setMessageChan([...messagesChan, message]);
    }
    useEffect(() => {
        socket?.on("newChannelMessage", messageChanListener)
        return () => {
            socket?.off("newChannelMessage", messageChanListener)
        }
    }, [messageChanListener]);

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
        <ChannelComponent setChannel={setChannelTarget} sendToChannel={sendToChannel}/>
        <Messages message={messagesChan}/>
        <Flex>
    <Flex grow shrink basis="1px">
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        width="100%"
      >
        <Contact setConversation={setContact}/>
        Left area
      </Box>
    </Flex>
    <Flex grow shrink basis="1px">
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
      >
        <Conversation contact={contact}/>
        Right area
      </Box>
    </Flex>
  </Flex>
        </>
    )
}

export default ChatComponent;