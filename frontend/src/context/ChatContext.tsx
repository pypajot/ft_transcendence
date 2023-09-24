import * as React from 'react';
import { ConversationInformation } from '../../public/Types/conversationInformation.entity';
import { createContext, useContext, useMemo, useState } from 'react';
import { User } from './AuthContext';
import { useSocketContext } from './WebSocketContext';

export interface Channel {
    members: User[];
    name: string;
    picture?: string;
}

export interface Error {
    noSuchChannelName: boolean;
    wrongPrivileges: boolean;
    wrongPassword: boolean;
    alreadyUsedChannelName: boolean;
}

type ChatContext = {
    conversationInfo: ConversationInformation | undefined;
    setConversationInfo: (
        coversationInfo: ConversationInformation | undefined
    ) => void;
    channelIn: Channel[] | undefined;
    leaveChannel: (channelName: string, username: string) => void;
    channelRequestList: Channel[] | undefined;
    setChannelRequestList: (channelRequestList: Channel[] | undefined) => void;
    error: Error;
    resetError: () => void;
};

type ChatContextProviderProps = {
    children: React.ReactNode;
};
export const ChatContext = createContext<ChatContext | undefined>(undefined);

export default function ChatContextProvider(props: ChatContextProviderProps) {
    const [conversationInfo, setConversationInfo] = useState<
        ConversationInformation | undefined
    >(undefined);
    const [channelIn, setChannelIn] = useState<Channel[] | undefined>(
        undefined
    );
    const socket = useSocketContext();
    const [channelRequestList, setChannelRequestList] = useState<
        Channel[] | undefined
    >(undefined);
    const [error, setError] = React.useState<Error>({
        noSuchChannelName: false,
        wrongPrivileges: false,
        wrongPassword: false,
        alreadyUsedChannelName: false,
    });

    //Case we update : New Channel created | Joined a new channel
    const leaveChannel = React.useCallback(
        (channelName: string, username: string) => {
            socket?.emit('userLeavingChannel', {
                chanelName: channelName,
                user: username,
            });

            //Do we ask the back to assure that we correctly leaved the channel or not
            setChannelIn(
                channelIn?.filter((channel) => {
                    if (channel.name == channelName) {
                        return false;
                    } else {
                        return true;
                    }
                })
            );
        },
        [setChannelIn, channelIn, socket]
    );

    const addChannel = React.useCallback(
        (channel: Channel) => {
            if (channelIn == undefined) {
                setChannelIn([channel]);
            } else {
                setChannelIn([...channelIn, channel]);
                setConversationInfo({
                    ischannel: true,
                    isUser: false,
                    name: channel.name,
                });
            }
        },
        [setChannelIn, channelIn, setConversationInfo]
    );

    const initChannels = React.useCallback(
        (channels: Channel[]) => {
            setChannelIn(channels);
        },
        [setChannelIn]
    );

    const initChannelsRequest = React.useCallback(
        (channels: Channel[]) => {
            if (channels) {
                setChannelRequestList(channels);
            }
        },
        [setChannelRequestList]
    );

    const setErrorFromBackend = (error: Error) => {
        setError(error);
    };

    const resetError = React.useCallback(() => {
        setError({
            noSuchChannelName: false,
            wrongPrivileges: false,
            wrongPassword: false,
            alreadyUsedChannelName: false,
        });
    }, [setError]);

    React.useEffect(() => {
        socket?.on('InitChannelsRequest', initChannelsRequest);
        socket?.on('InitChannels', initChannels);
        socket?.on('successfullyJoinedChannel', addChannel);
        socket?.on('Error', setErrorFromBackend);
        return () => {
            socket?.off('successfullyJoinedChannel', addChannel);
            socket?.off('InitChannels', initChannels);
            socket?.off('Error', setErrorFromBackend);
        };
    }, [socket, addChannel, initChannels, initChannelsRequest]);

    const value = useMemo(
        () => ({
            conversationInfo,
            setConversationInfo,
            channelIn,
            leaveChannel,
            channelRequestList,
            setChannelRequestList,
            error,
            resetError,
        }),
        [
            conversationInfo,
            setConversationInfo,
            channelIn,
            leaveChannel,
            channelRequestList,
            setChannelRequestList,
            error,
            resetError,
        ]
    );
    return (
        <ChatContext.Provider value={value}>
            {props.children}
        </ChatContext.Provider>
    );
}

export function useChatContext() {
    const context = useContext(ChatContext);

    if (context == undefined) {
        throw new Error(
            'You need to use ChatContext with in a ChatContextProvider'
        );
    }
    if (context.channelRequestList == undefined) {
        context.channelRequestList = [];
    }
    return context;
}
