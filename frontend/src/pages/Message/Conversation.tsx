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

const sortByDate = () => {
    return function (a: any, b: any) {
        if (a.createdAt > b.createdAt) {
            return 1;
        } else if (a.createdAt < b.createdAt) {
            return -1;
        }
        return 0;
    };
};

export const Conversation = () => {
    const [content, setContent] = useState<string>('');
    const { user, refreshFetch } = useAuth();
    const [sentMessage, setSentMessage] = useState<Message[]>();
    const [receivedMessage, setReceivedMessage] = useState<Message[]>();
    const [conversationMsg, setConversationMsg] = useState<Message[]>([]);
    const [username, setUsername] = useState<string>('');
    const [convName, setConvName] = useState<string>('undefined');

    const chatContext = useChatContext();
    //Make a component to get the previous messsage
    const { socket } = useSocketContext();
    const info = useChatContext().conversationInfo;

    useEffect(() => {
        if (!user) {
            setUsername('');
        } else {
            setUsername(user.username);
        }
    }, [user]);

    useEffect(() => {
        const info = chatContext.conversationInfo;
        if (info && info.isChannel && info.channel) {
            setConvName(info.channel.name);
        } else if (info && info.user) {
            setConvName(info.user.username);
        }
    }, [chatContext, chatContext.conversationInfo]);

    const getMessageReceived = async (obj: {
        sender: string;
        receiver: string;
        isUser: boolean;
    }) => {
        const url = 'http://localhost:3333/chat/getMessageReceived';

        try {
            const response = await refreshFetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem(
                        'access_token'
                    )}`,
                },
                body: JSON.stringify({
                    sender: obj.sender,
                    receiver: obj.receiver,
                    isUser: obj.isUser,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('There was an error fetching the data', error);
        }
    };

    useEffect(() => {
        if (!info) {
            return;
        }
        if (username != '') {
            getMessageReceived({
                sender: convName,
                receiver: username,
                isUser: info.isUser,
            }).then((res: any) => {
                setReceivedMessage(res);
            });
        } else {
            chatContext.setRenderConversation(false);
        }
    }, [info, username]);

    useEffect(() => {
        if (!info) {
            return;
        }
        if (username != '') {
            getMessageSent({
                sender: username,
                receiver: convName,
                isUser: info.isUser,
            }).then((res) => {
                console.log(res);
                setSentMessage(res);
            });
        }
    }, [info, user, username]);

    useEffect(() => {
        //if (info && info.ischannel) {
        // setRenderConversation(false);
        //return;
        // }
        if (receivedMessage && user) {
            receivedMessage.forEach(function (obj) {
                obj.sent = false;
            });
            setReceivedMessage(receivedMessage);
        }
        if (sentMessage != undefined) {
            sentMessage.forEach(function (obj) {
                obj.sent = true;
            });
            setSentMessage(sentMessage);
        }
        if (receivedMessage && sentMessage) {
            setConversationMsg(
                sentMessage.concat(receivedMessage).sort(sortByDate())
            );
        }
    }, [sentMessage, receivedMessage]);

    const handleComposerChange = (editorState: EditorState): void => {
        editorState.read(() => {
            const root = $getRoot();
            const text = root.getTextContent();
            setContent(text);
        });
    };

    const channelMessage = useCallback(
        (message: Message) => {
            if (user && message.senderName != user.username) {
                message.sent = false;
            }
            if (
                message.channel &&
                message.channel.name ==
                    chatContext.conversationInfo?.channel?.name
            )
                setConversationMsg([...conversationMsg, message]);
            console.log(conversationMsg);
        },
        [setConversationMsg, conversationMsg, user]
    );

    const messageListener = useCallback(
        (message: Message) => {
            if (
                info?.isUser &&
                (message.senderName === info?.user?.username ||
                    message.senderName === user?.username)
            )
                setConversationMsg([...conversationMsg, message]);
        },
        [setConversationMsg, conversationMsg]
    );

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

    useEffect(() => {
        socket?.on('messageSent', messageListener);
        socket?.on('messageChannel', channelMessage);
        socket?.on('messageRcv', messageListener);
        return () => {
            socket?.off('messageSent', messageListener);
            socket?.off('messageChannel', channelMessage);
            socket?.off('messageRcv', messageListener);
        };
    }, [messageListener, socket, channelMessage]);

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
