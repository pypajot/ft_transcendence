import * as React from 'react';
import { ConversationInformation } from '../../public/Types/conversationInformation.entity';
import { createContext, useContext, useMemo, useState } from 'react';
import { User, useAuth } from './AuthContext';
import { useSocketContext } from './WebSocketContext';
import { channel } from 'diagnostics_channel';

export interface Channel {
    id: number;
    members: User[];
    name: string;
    owner: number;
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
    channels: Map<string, Channel> | undefined;
    arrayChannels: Channel[];
    leaveChannel: (channelName: string, username: string) => void;
    //channelRequestList: Channel[] | undefined;
    // setChannelRequestList: (channelRequestList: Channel[] | undefined) => void;
    error: Error;
    resetError: () => void;
    isChannelOwner: () => boolean;
};

type ChatContextProviderProps = {
    children: React.ReactNode;
};
export const ChatContext = createContext<ChatContext | undefined>(undefined);

export default function ChatContextProvider(props: ChatContextProviderProps) {
    const [conversationInfo, setConversationInfo] = useState<
        ConversationInformation | undefined
    >(undefined);
    const [channels] = useState<Map<string, Channel> | undefined>(new Map());
    const [arrayChannels, setArrayChannels] = useState<Channel[]>([]);
    const socket = useSocketContext();
    const { user } = useAuth();
    // const [channelRequestList, setChannelRequestList] = useState<
    //    Channel[] | undefined
    // >(undefined);
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
            if (channels) {
                const actualChannel = channels?.get(channelName);
                if (actualChannel) {
                    const newMemberList = actualChannel?.members.filter(
                        (members) => {
                            if (members.username != username) {
                                return true;
                            }
                            return false;
                        }
                    );
                    actualChannel.members = newMemberList;
                    channels.set(actualChannel?.name, actualChannel);
                }
                //Do we ask the back to assure that we correctly leaved the channel or not
            }
        },
        [socket, channels]
    );
    const isChannelOwner = React.useCallback(() => {
        if (channels && conversationInfo) {
            const channel = channels.get(conversationInfo?.name);
            if (channel && channel.owner == user?.id) return true;
        }
        return false;
    }, [channels, conversationInfo, user]);

    const addChannel = React.useCallback(
        (channel: Channel) => {
            channels?.set(channel.name, channel);
            setConversationInfo({
                ischannel: true,
                isUser: false,
                name: channel.name,
            });
            console.log(channels);
            setArrayChannels([...arrayChannels, channel]);
        },
        [channels, setConversationInfo, setArrayChannels, arrayChannels]
    );

    const initChannels = React.useCallback(
        (channelsArray: Channel[]) => {
            channelsArray.map((channel) => {
                channels?.set(channel.name, channel);
                setArrayChannels([...arrayChannels, channel]);
            });
            console.log(channels);
        },
        [channels, arrayChannels, setArrayChannels]
    );
    /*
    const initChannelsRequest = React.useCallback(
        (channels: Channel[]) => {
            if (channels) {
                setChannelRequestList(channels);
            }
        },
        [setChannelRequestList]
    );*/

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
        // socket?.on('InitChannelsRequest', initChannelsRequest);
        socket?.on('InitChannels', initChannels);
        socket?.on('successfullyJoinedChannel', addChannel);
        socket?.on('Error', setErrorFromBackend);
        return () => {
            socket?.off('successfullyJoinedChannel', addChannel);
            socket?.off('InitChannels', initChannels);
            socket?.off('Error', setErrorFromBackend);
        };
    }, [socket, addChannel, initChannels /*initChannelsRequest*/]);

    const value = useMemo(
        () => ({
            conversationInfo,
            setConversationInfo,
            channels,
            leaveChannel,
            //  channelRequestList,
            // setChannelRequestList,
            arrayChannels,
            error,
            resetError,
            isChannelOwner,
        }),
        [
            conversationInfo,
            setConversationInfo,
            channels,
            leaveChannel,
            //channelRequestList,
            //setChannelRequestList,
            error,
            arrayChannels,
            resetError,
            isChannelOwner,
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
    //   if (context.channelRequestList == undefined) {
    //      context.channelRequestList = [];
    // }
    return context;
}
