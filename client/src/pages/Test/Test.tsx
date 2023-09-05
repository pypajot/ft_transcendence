import { Avatar, Box, ChatAttachment, ChatAttachmentDescription, ChatAttachmentLink, ChatEvent } from '@twilio-paste/core';
import {
    ChatLog,
    ChatMessage,
    ChatMessageMeta,
    ChatMessageMetaItem,
    ChatBubble,
    ChatBookend,
    ChatBookendItem,
  } from '@twilio-paste/core/chat-log';
  
  const Test = () => {
        return (
          <Box maxHeight='size40'>
            <ChatLog>
              <ChatBookend>
                <ChatBookendItem>Yesterday</ChatBookendItem>
                <ChatBookendItem>
                  <strong>Chat Started</strong>・3:34 PM
                </ChatBookendItem>
              </ChatBookend>
              <ChatEvent>
                <strong>Gibby Radki</strong> has joined the chat・3:34 PM
              </ChatEvent>
              <ChatMessage variant='inbound'>
                <ChatBubble>
                  Hello, what can I help you with?
                </ChatBubble>
                <ChatMessageMeta aria-label="said by Gibby Radki at 3:35 PM">
                  <ChatMessageMetaItem>
                    <Avatar name="Gibby Radki" size="sizeIcon20" />
                    Gibby Radki ・ 3:35 PM
                  </ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant='outbound'>
                <ChatBubble>
                  Hi! What is your return policy?
                </ChatBubble>
                <ChatMessageMeta aria-label="said by you at 3:35 PM">
                  <ChatMessageMetaItem>3:35 PM</ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant='inbound'>
                <ChatBubble>
                  You have 30 days to send your items back. Here is the full policy if you would like to read more.
                </ChatBubble>
                <ChatMessageMeta aria-label="said by Gibby Radki at 3:37 PM">
                  <ChatMessageMetaItem>
                    <Avatar name="Gibby Radki" size="sizeIcon20" />
                    Gibby Radki ・ 3:37 PM
                  </ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant='outbound'>
                <ChatBubble>
                  Thank you
                </ChatBubble>
                <ChatMessageMeta aria-label="said by you at 3:40 PM">
                  <ChatMessageMetaItem>3:40 PM</ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatBookend>
                <ChatBookendItem>Today</ChatBookendItem>
              </ChatBookend>
              <ChatMessage variant='outbound'>
                <ChatBubble>
                  I have shipped the item back, how long will it take to get the refund?
                </ChatBubble>
                <ChatMessageMeta aria-label="said by you at 11:27 AM">
                  <ChatMessageMetaItem>11:27 AM</ChatMessageMetaItem>
                </ChatMessageMeta>
                <ChatMessageMeta aria-label="(read)">
                  <ChatMessageMetaItem>Read</ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant='inbound'>
                <ChatBubble>
                  You should recieve the refund within 10 days.
                </ChatBubble>
                <ChatMessageMeta aria-label="said by Gibby Radki at 11:29 AM">
                  <ChatMessageMetaItem>
                    <Avatar name="Gibby Radki" size="sizeIcon20" />
                    Gibby Radki ・ 11:29 AM
                  </ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant='inbound'>
                <ChatBubble>
                  Do you need help with anything else?
                </ChatBubble>
                <ChatMessageMeta aria-label="said by Gibby Radki at 11:36 AM">
                  <ChatMessageMetaItem>
                    <Avatar name="Gibby Radki" size="sizeIcon20" />
                    Gibby Radki ・ 11:36 AM
                  </ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatBookend>
              <ChatBookendItem>
                <strong>Chat Ended</strong>・11:45 AM
              </ChatBookendItem>
            </ChatBookend>
            </ChatLog>
          </Box>
        );
      };
      
  export default Test;
  
