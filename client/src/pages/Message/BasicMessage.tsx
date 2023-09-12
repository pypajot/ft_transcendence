import { ChatBubble, ChatLog, ChatMessage } from "@twilio-paste/core";

export const BasicOutMessage = ({ content }: { content: string }) => {
    return (
      <ChatLog>
        <ChatMessage variant='outbound'>
          <ChatBubble>
            {content}
          </ChatBubble>
        </ChatMessage>
      </ChatLog>
    );
};

export const BasicInMessage = ({content}: {content: string}) => {
    return (
      <ChatLog>
        <ChatMessage variant='inbound'>
          <ChatBubble>
            {content}
          </ChatBubble>
        </ChatMessage>
      </ChatLog>
    );
};