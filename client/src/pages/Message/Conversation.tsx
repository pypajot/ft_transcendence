import { ChatComposer } from '@twilio-paste/chat-composer'
import {useEffect, useState } from 'react'
import {$getRoot,EditorState, ClearEditorPlugin} from '@twilio-paste/lexical-library';
import { Box } from '@twilio-paste/core';
import SendButton from './SendButton';
import getMesageReceived from './Hooks/GetUserMessageReceived';
import getMessageSent from './Hooks/GetUserMessageSent';
import { Message } from '../../../public/Types/message.entity'
import { BasicInMessage, BasicOutMessage } from './BasicMessage';

const sortByDate = () =>{
  return function(a: any, b:any){
    if (a.createdAt > b.createdAt){
      return 1;
    } else if (a.createdAt < b.createdAt){
      return -1;
    }
    return 0;
  }
}

export const Conversation = ({contact}: {contact: string}) => {
    const [content, setContent] = useState<string>("A basic chat composer");
    const user = localStorage.getItem('username');
    const [sentMessage, setSentMessage] = useState<Message[]>();
    const [receivedMessage, setReceivedMessage] = useState<Message[]>();

    console.log(`Helllo ${contact}`);
    useEffect(() => {
      if (contact){
        getMesageReceived({sender: contact, receiver: user}).then((res) => {
        setReceivedMessage(res);
        })
      }
    }, [contact])
    useEffect(() => {
      if (contact)
      {
        getMessageSent({sender: user, receiver: contact}).then((res) => {
        setSentMessage(res);
        })
      }
    }, [contact])
    if (receivedMessage)
    {
      receivedMessage.forEach(function(obj){
        obj.sent = false;
      })
    }
    if (sentMessage != undefined)
    {
      sentMessage.forEach(function(obj){
        obj.sent = true;
      })
    }
    let allMessages = undefined; 
    if (receivedMessage && sentMessage)
    {
      allMessages = sentMessage.concat(receivedMessage);
      allMessages.sort(sortByDate());
    }
    console.log(allMessages);

    const handleComposerChange = (editorState: EditorState): void => {
      editorState.read(() => {
        const root = $getRoot();
        const text = root.getTextContent();
        console.log(text);
        setContent(text);
      });
    };

    const sendMessage = () => {
      alert(1);
    }
/*
      <ChatComposer
        ariaLabel="A rich text chat composer"
        config={{
          namespace: 'customer-chat',
          onError (e) { throw e },
        }}
        onChange={handleComposerChange}
      />
        <div>Here is the content</div>
        <h1>{content}</h1>*/

    return (

          <>
          {allMessages && allMessages.map(function(message, i){
            if (message.sent){
              return (
              <div key={i}>
              < BasicOutMessage content={message.content}></BasicOutMessage>
              </div>)
            }
            else{
              return (
              <div key={i}>
              < BasicInMessage content={message.content}></BasicInMessage>
              </div>)
            }
          })}
          <Box
          borderStyle="solid"
          borderWidth="borderWidth0"
          borderTopWidth="borderWidth10"
          borderColor="colorBorderWeak"
          display="flex"
          flexDirection="row"
          columnGap="space30"
          paddingX="space70"
          paddingTop="space50"
        >
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: 'foo',
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
            onChange={handleComposerChange} >
          <ClearEditorPlugin />
          </ChatComposer>
          <SendButton onClick={sendMessage} />
          </Box>
          </>
    )
  }
