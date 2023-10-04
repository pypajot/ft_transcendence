import * as React from 'react';
import { Message, t_event } from '../../Types/message.entity';
import { useSocketContext } from './WebSocketContext';
import { useAuth } from './AuthContext';
import { useChatContext } from './ChatContext';

type ConversationContex = {
    messages: Message[];
    convName: string;
};

type ConversationContextProviderProps = {
    children: React.ReactNode;
};
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
export const ConversationContext = React.createContext<
    ConversationContex | undefined
>(undefined);

export default function ConversationContextProvider(
    props: ConversationContextProviderProps
) {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [convName, setConvName] = React.useState<string>('undef');
    const [username, setUsername] = React.useState<string>('');
    const { socket } = useSocketContext();
    const { user, refreshFetch } = useAuth();
    const chatContext = useChatContext();

    React.useEffect(() => {
        if (!user) {
            setUsername('');
        } else {
            setUsername(user.username);
        }
    }, [user]);

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

    const getMessageSent = async (obj: {
        sender: string;
        receiver: string;
        isUser: boolean;
    }) => {
        const url = 'http://localhost:3333/chat/getMessageSent';

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

    React.useEffect(() => {
        const info = chatContext.conversationInfo;
        let rcvMessage: Message[] = [];
        let sentMessage: Message[] = [];
        if (!info) {
            return;
        }
        if (info && info.isChannel && info.channel) {
            setConvName(info.channel.name);
        } else if (info && info.isUser && info.user) {
            setConvName(info.user.username);
        }
        if (username != '') {
            getMessageReceived({
                sender: convName,
                receiver: username,
                isUser: info.isUser,
            }).then((res: any) => {
                if (res.array) {
                    res.array.forEach((msg: Message) => {
                        if (
                            msg.event == t_event.SENT ||
                            msg.event == t_event.RCV
                        ) {
                            msg.event = t_event.RCV;
                        }
                    });
                    rcvMessage = res;
                }
            });
        } else {
            chatContext.setRenderConversation(false);
            return;
        }
        if (username != '') {
            getMessageSent({
                sender: username,
                receiver: convName,
                isUser: info.isUser,
            }).then((res) => {
                console.log(res);
                if (res.array) {
                    res.array.forEach((msg: Message) => {
                        if (
                            msg.event == t_event.SENT ||
                            msg.event == t_event.RCV
                        ) {
                            msg.event = t_event.SENT;
                        }
                    });
                    sentMessage = res;
                }
            });
        }
        if (rcvMessage || sentMessage) {
            setMessages(sentMessage.concat(rcvMessage).sort(sortByDate()));
        }
    }, []);
    const channelMessage = React.useCallback(
        (message: Message) => {
            if (user && message.senderName != user.username) {
                message.sent = false;
            }
            if (
                message.channel &&
                message.channel.name ==
                    chatContext.conversationInfo?.channel?.name
            )
                setMessages([...messages, message]);
            console.log(messages);
        },
        [setMessages, messages, user]
    );

    const messageListener = React.useCallback(
        (message: Message) => {
            if (
                chatContext.conversationInfo?.isUser &&
                (message.senderName ===
                    chatContext.conversationInfo?.user?.username ||
                    message.senderName === user?.username)
            )
                setMessages([...messages, message]);
        },
        [setMessages, messages]
    );

    React.useEffect(() => {
        socket?.on('messagePrivate', messageListener);
        socket?.on('messageChannel', channelMessage);
        return () => {
            socket?.off('messagePrivate', messageListener);
            socket?.off('messageChannel', channelMessage);
        };
    }, [messageListener, socket, channelMessage]);
    const value = React.useMemo(
        () => ({
            messages,
            convName,
        }),
        [messages, convName]
    );
    return (
        <ConversationContext.Provider value={value}>
            {props.children}
        </ConversationContext.Provider>
    );
}

export function useConversationContext() {
    const context = React.useContext(ConversationContext);
    if (context == undefined) {
        throw new Error(
            'You need to use ConversationContext with in a ConversationContextProvider'
        );
    }
    return context;
}
