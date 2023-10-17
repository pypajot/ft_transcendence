import { useCallback, useEffect, useState, useRef } from 'react';
import { Flex } from '@twilio-paste/core';
import { Message } from '../../../Types/message.entity';
import { MessageInfo } from '../../../Types/messageInfo.entity';
import { BasicInMessage, BasicOutMessage } from './BasicMessage';
import { useSocketContext } from '../../context/WebSocketContext';
import { useAuth } from '../../context/AuthContext';
import { useChatContext } from '../../context/ChatContext';
import { OptionMenu } from './OptionMenu';
import sendIcon from '../../assets/send.png';
import './Conversation.css';

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
    const convContainerRef = useRef<HTMLDivElement>(null);

    const { conversationInfo, isBlocked, renderConversation } =
        useChatContext();
    //Make a component to get the previous messsage
    const { socket } = useSocketContext();

    useEffect(() => {
        if (!user) {
            setUsername('');
        } else {
            setUsername(user.username);
        }
    }, [user]);

    const getMessageReceived = async (obj: {
        sender?: string;
        receiver: string;
        isUser: boolean;
    }) => {
        const url = 'http://localhost:3333/api/chat/getMessageReceived';

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
                return [];
            }

            const text = await response.text();
            const json = JSON.parse(text);
            setReceivedMessage(json);
        } catch (error) {
            console.error('There was an error fetching the data', error);
        }
    };

    const getMessageSent = async (obj: {
        sender: string;
        receiver?: string;
        isUser: boolean;
    }) => {
        const url = 'http://localhost:3333/api/chat/getMessageSent';
        // try {
        const response = await refreshFetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender: obj.sender,
                receiver: obj.receiver,
                isUser: obj.isUser,
            }),
        });
        if (!response.ok) {
            return [];
        }
        // console.log(response)
        const text = await response.text();
        const json = text === '[]' ? [] : JSON.parse(text);
        setSentMessage(json);
        // return ();
        //   } catch (error) {
        // 	console.error("There was an error fetching the data", error);
        //   http://localhost:3333/home}
    };

    // useEffect(() => {}, [conversationInfo, username]);

    useEffect(() => {
        const info = conversationInfo;
        if (!info) {
            return;
        }
        // if (info && info.isChannel && info.channel) {
        // 	setConvName(info.channel.name);
        // } else if (info && info.isUser && info.user) {
        // 	setConvName(info.user.username);
        // }
        // if (username === '' || convName === '') {
        // 	setRenderConversation(false);
        // 	return ;
        // }
        if (!username) return;
        getMessageSent({
            sender: username,
            receiver: info.isUser ? info.user?.username : info.channel?.name,
            isUser: info.isUser,
        });
        getMessageReceived({
            sender: info.isUser ? info.user?.username : info.channel?.name,
            receiver: username,
            isUser: info.isUser,
        });
    }, [
        conversationInfo,
        // renderConversation,
        username,
    ]);

    useEffect(() => {
        // if (info && info.ischannel) {
        // setRenderConversation(false);
        // return;
        // }
        const info = conversationInfo;
        if (!info) return;
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

    // const handleComposerChange = (editorState: EditorState): void => {
    //     editorState.read(() => {
    //         const root = $getRoot();
    //         const text = root.getTextContent();
    //         setContent(text);
    //     });
    // };

    const channelMessage = useCallback(
        (message: Message) => {
            if (user && message.senderName != user.username) {
                message.sent = false;
            }
            if (
                message.channel &&
                message.channel.name == conversationInfo?.channel?.name
            )
                setConversationMsg([...conversationMsg, message]);
            // console.log(conversationMsg);
        },
        [setConversationMsg, conversationMsg, user]
    );

    const messageListener = useCallback(
        (message: Message) => {
            if (
                conversationInfo?.isUser &&
                (message.senderName === conversationInfo?.user?.username ||
                    message.senderName === user?.username)
            )
                setConversationMsg([...conversationMsg, message]);
        },
        [setConversationMsg, conversationMsg]
    );

    const sendMessage = () => {
        if (content && content != '' && conversationInfo) {
            const message_content: MessageInfo = {
                content: content,
                target: conversationInfo.user
                    ? conversationInfo.user.username
                    : conversationInfo.channel?.name,
                ToUser: conversationInfo.isUser,
            };
            socket?.emit('message', message_content);
            setContent('');
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

    const handleFormSubmit = (e: any) => {
        e.preventDefault(); // Prevents default form submission behavior
        sendMessage();
    };

    const handleInputChange = (e: any) => {
        setContent(e.target.value);
    };

    useEffect(() => {
        const container = convContainerRef.current;
        if (container)
            container.scrollTop =
                container.scrollHeight - container.clientHeight;
    }, [conversationMsg]);

    const renderName = () => {
        if (
            conversationInfo &&
            conversationInfo.isUser &&
            conversationInfo.user
        ) {
            return conversationInfo.user.username;
        } else if (
            conversationInfo &&
            conversationInfo.isChannel &&
            conversationInfo.channel
        ) {
            return conversationInfo.channel.name;
        }
        return '';
    };
    return (
        <>
            {renderConversation && conversationInfo && (
                <div className="conversation-name">
                    <Flex>
                        <Flex grow shrink basis="1px">
                            <Flex>
                                {renderName().length > 20
                                    ? renderName().substring(20, 0) + '...'
                                    : renderName()}
                            </Flex>
                        </Flex>
                        <OptionMenu />
                    </Flex>
                </div>
            )}
            {renderConversation && conversationInfo && (
                <div className="conversation-container" ref={convContainerRef}>
                    {conversationMsg &&
                        conversationMsg.map(function (message, i) {
                            if (
                                message.targetId &&
                                conversationInfo?.isChannel
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
                                if (isBlocked(message.authorId)) {
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
                </div>
            )}
            {renderConversation && conversationInfo && (
                <div className="conversation-input-area">
                    <form
                        onSubmit={handleFormSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flex: 1,
                        }}>
                        <input
                            className="conversation-input-field"
                            type="text"
                            placeholder="Type here..."
                            value={content}
                            onChange={handleInputChange}
                            style={{ flex: 1 }}
                        />
                        <button
                            className="conversation-button"
                            type="submit"
                            name="send"
                            disabled={!content}>
                            <img
                                src={sendIcon}
                                alt="Send"
                                className="conversation-button-icon"
                            />
                        </button>
                    </form>
                </div>
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
