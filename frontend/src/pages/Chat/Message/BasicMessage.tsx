import {
    ChatBubble,
    ChatLog,
    ChatMessage,
    ChatMessageMeta,
    ChatMessageMetaItem,
} from '@twilio-paste/core';
import { Message } from '../../../../Types/message.entity';

export const BasicOutMessage = ({ message }: { message: Message }) => {
    return (
        <ChatLog>
            <ChatMessage variant="outbound">
                <ChatBubble>{message.content}</ChatBubble>
            </ChatMessage>
        </ChatLog>
    );
};

export const BasicInMessage = ({ message }: { message: Message }) => {
    return (
        <ChatLog>
            <ChatMessage variant="inbound">
                <ChatMessageMeta aria-label="info">
                    <ChatMessageMetaItem>
                        {message.senderName}
                    </ChatMessageMetaItem>
                </ChatMessageMeta>
                <ChatBubble>{message.content}</ChatBubble>
            </ChatMessage>
        </ChatLog>
    );
};
