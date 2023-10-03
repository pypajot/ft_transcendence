import { ChatComposer } from '@twilio-paste/chat-composer';
import { useCallback, useEffect, useState } from 'react';
import {
    $getRoot,
    EditorState,
    ClearEditorPlugin,
} from '@twilio-paste/lexical-library';
import { Box, Flex } from '@twilio-paste/core';
import getMessageSent from './Hooks/GetUserMessageSent';
import { Message } from '../../../Types/message.entity';
import { MessageInfo } from '../../../Types/messageInfo.entity';
import { BasicInMessage, BasicOutMessage } from './BasicMessage';
import { useSocketContext } from '../../context/WebSocketContext';
import { useAuth } from '../../context/AuthContext';
import { useChatContext } from '../../context/ChatContext';
import { OptionMenu } from './OptionMenu';
import { EnterKeySubmitPlugin, SendButtonPlugin } from './Plugins';

export const Conversation = () => {
    const [content, setContent] = useState<string>('');

    const chatContext = useChatContext();
    //Make a component to get the previous messsage
    const { socket } = useSocketContext();
    const info = useChatContext().conversationInfo;

    const handleComposerChange = (editorState: EditorState): void => {
        editorState.read(() => {
            const root = $getRoot();
            const text = root.getTextContent();
            setContent(text);
        });
    };

    const sendMessage = () => {
        if (content && content != '' && info) {
            const message_content: MessageInfo = {
                content: content,
                target: convName,
                ToUser: info.isUser,
            };
            socket?.emit('message', message_content);
        }
    };

    return (
        <>
            {chatContext.renderConversation && (
                <Flex>
                    <Flex grow shrink basis="1px">
                        <Flex>{convName}</Flex>
                    </Flex>
                    <OptionMenu />
                </Flex>
            )}
            {conversationMsg &&
                chatContext.renderConversation &&
                conversationMsg.map(function (message, i) {
                    if (
                        message.targetId &&
                        chatContext.conversationInfo?.isChannel
                    ) {
                        return;
                    }
                    if (message.sent) {
                        return (
                            <div key={i}>
                                <BasicOutMessage
                                    message={message}></BasicOutMessage>
                            </div>
                        );
                    } else {
                        if (chatContext.isBlocked(message.authorId)) {
                            return;
                        }
                        return (
                            <div key={i}>
                                <BasicInMessage
                                    message={message}></BasicInMessage>
                            </div>
                        );
                    }
                })}
            {chatContext.renderConversation && (
                <Box
                    borderStyle="solid"
                    borderWidth="borderWidth0"
                    borderTopWidth="borderWidth10"
                    borderColor="colorBorderWeak"
                    display="flex"
                    flexDirection="row"
                    columnGap="space30"
                    paddingX="space70"
                    paddingTop="space50">
                    <ChatComposer
                        maxHeight="size10"
                        config={{
                            namespace: 'chatBox',
                            onError: (error) => {
                                throw error;
                            },
                        }}
                        ariaLabel="Message"
                        placeholder="Type here..."
                        onChange={handleComposerChange}>
                        <ClearEditorPlugin />
                        <SendButtonPlugin onClick={sendMessage} />
                        <EnterKeySubmitPlugin onKeyDown={sendMessage} />
                    </ChatComposer>
                </Box>
            )}
        </>
    );
};
/*
const ConversationRender = () => {
    const {chat, push} = useChatLogger({
        content: (
            <ChatBookend>
                <ChatBookendItem>Date</ChatBookendItem>
                <ChatBookendItem>
                    <strong>This is a header</strong> Which time ?
                </ChatBookendItem>
            </ChatBookend>
        ),
    },
    {
        conversationMsg.map(function (message, i) {
            if (message.sent) {
                return (
                    <div key={i}>
                        <BasicOutMessage
                            message={message}></BasicOutMessage>
                    </div>
                );
            } else {
                return (
                    <div key={i}>
                        <BasicInMessage
                            message={message}></BasicInMessage>
                    </div>
                );
            }
        })}   
    })
    }
}*/
