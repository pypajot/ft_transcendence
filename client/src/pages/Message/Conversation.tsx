import { ChatComposer } from '@twilio-paste/chat-composer'
import React, { useContext, useEffect, useState } from 'react'
import {$getRoot, $getSelection, $createParagraphNode, $createTextNode, EditorState, ClearEditorPlugin} from '@twilio-paste/lexical-library';
import { Box } from '@twilio-paste/core';
import SendButton from './SendButton';
import getMesageReceived from './Hooks/GetUserMessageReceived';
import getMessageSent from './Hooks/GetUserMessageSent';
import { applySelectionTransforms } from 'lexical/LexicalSelection';
import { Message } from '../../../public/message.entity'

const requestData = async(user: string, target: string) => {
  const json_msgs = await getMesageReceived({sender: user, receiver: target})
  return json_msgs;
}

export const Conversation = () => {
  const contact = 'dudu'
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
    }, [])
    useEffect(() => {
      if (contact)
      {
        getMessageSent({sender: user, receiver: contact}).then((res) => {
        setSentMessage(res);
        if (sentMessage)
          {
        console.log(`There ${sentMessage[0]} `);
          }
        })
      }
    }, [])
    console.log(receivedMessage);
    if (receivedMessage && sentMessage)
    {
      const allMessages = sentMessage.concat(receivedMessage);
    }

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
    )
  }
