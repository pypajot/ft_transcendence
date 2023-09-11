import { ChatBubble, ChatLog, ChatMessage } from "@twilio-paste/core";

const sortMessages = (messages: JSON[]) => {
    messages = messages.sort((a, b) => {
        if (a.date > b.date)
        {
            return (-1);
        }
        return (0);
    });
    return (messages);
}

export const BasicOutMessage = (content:string) => {
    return (
      <ChatLog>
        <ChatMessage variant='outbound'>
          <ChatBubble>
            ${content}
          </ChatBubble>
        </ChatMessage>
      </ChatLog>
    );
};

export const BasicInMessage = (content:string) => {
    return (
      <ChatLog>
        <ChatMessage variant='inbound'>
          <ChatBubble>
            ${content}
          </ChatBubble>
        </ChatMessage>
      </ChatLog>
    );
};