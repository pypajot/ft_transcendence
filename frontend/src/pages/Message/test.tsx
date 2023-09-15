import * as React from 'react'
import { Avatar, Box, ChatAttachment, ChatAttachmentDescription, ChatAttachmentLink, ChatBookend, ChatBookendItem, ChatBubble, ChatComposer, ChatEvent, ChatLogger, ChatMessage, ChatMessageMeta, ChatMessageMetaItem, useChatLogger } from "@twilio-paste/core";
import {$getRoot, $getSelection, $createParagraphNode, $createTextNode, createEditor, TextNode} from 'lexical';


export const ChatDialog = () => {
    const {chats, push} = useChatLogger(
      {
        content: (
          <ChatBookend>
            <ChatBookendItem>Today</ChatBookendItem>
            <ChatBookendItem>
              <strong>Chat Started</strong>・3:34 PM
            </ChatBookendItem>
          </ChatBookend>
        ),
      },
      {
        variant: 'inbound',
        content: (
          <ChatMessage variant="inbound">
            <ChatBubble>Quisque ullamcorper ipsum vitae lorem euismod sodales.</ChatBubble>
            <ChatBubble>
            </ChatBubble>
            <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
              <ChatMessageMetaItem>Gibby Radki ・ 5:04 PM</ChatMessageMetaItem>
            </ChatMessageMeta>
          </ChatMessage>
        ),
      },
      {
        content: (
          <ChatEvent>
            <strong>Lauren Gardner</strong> has joined the chat ・ 4:26 PM
          </ChatEvent>
        ),
      },
      {
        variant: 'inbound',
        content: (
          <ChatMessage variant="inbound">
            <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
            <ChatMessageMeta aria-label="said by Lauren Gardner at 4:30pm">
              <ChatMessageMetaItem>
                <Avatar name="Lauren Gardner" size="sizeIcon20" />
                Lauren Gardner ・ 4:30 PM
              </ChatMessageMetaItem>
            </ChatMessageMeta>
          </ChatMessage>
        ),
      }
    );
    const [message, setMessage] = React.useState('');
  
    const [mounted, setMounted] = React.useState(false);
    const loggerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);
  
    React.useEffect(() => {
      setMounted(true);
    }, []);
  
    React.useEffect(() => {
      if (!mounted || !loggerRef.current) return;
      scrollerRef.current?.scrollTo({top: loggerRef.current.scrollHeight, behavior: 'smooth'});
    }, [chats, mounted]);
  
    const handleComposerChange = (editorState: any) => {
      editorState.read(() => {
        const text = $getRoot().getTextContent();
        setMessage(text);
      });
    };
  
    const submitMessage = () => {
      if (message === '') return;
    };
  
    return (
      <>
      <Box>
        <Box ref={scrollerRef} overflowX="hidden" overflowY="scroll" maxHeight="size50" tabIndex={0}>
          <ChatLogger ref={loggerRef} chats={chats} />
        </Box>
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
            onChange={handleComposerChange}
          >
          </ChatComposer>
        </Box>
      
      </Box>
      <h1>${message}</h1>
      </>
    );
  };
  