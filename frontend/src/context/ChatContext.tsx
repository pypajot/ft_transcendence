import * as React from 'react';
import { ConversationInformation } from '../../public/Types/conversationInformation.entity';
import { createContext, useContext, useMemo, useState } from 'react';
import { User, useAuth } from './AuthContext';
import { useSocketContext } from './WebSocketContext';

export interface Channel {
    id: number;
    members: User[];
    name: string;
    owner: number;
    admins: number[];
    invited: number[];
    picture?: string;
}

export interface Error {
    noSuchChannelName: boolean;
    wrongPrivileges: boolean;
    wrongPassword: boolean;
    alreadyUsedChannelName: boolean;
    Banned: boolean;
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
    isAdmin: () => boolean;
    setRenderConversation: (value: boolean) => void;
    renderConversation: boolean;
    isBlocked: (id: number) => boolean;
};

type ChatContextProviderProps = {
    children: React.ReactNode;
};
export const ChatContext = createContext<ChatContext | undefined>(undefined);

export default function ChatContextProvider(props: ChatContextProviderProps) {
    const [conversationInfo, setConversationInfo] = useState<
        ConversationInformation | undefined
    >(undefined);
    const [renderConversation, setRenderConversation] =
        useState<boolean>(false);
    const [channels, setChannels] = useState<Map<string, Channel> | undefined>(
        new Map()
    );
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
        Banned: false,
    });

    React.useEffect(() => {
        const buff: Channel[] = [];
        if (channels) {
            console.log(buff, channels);
            for (const [key, value] of channels) {
                buff.push(value);
            }
        }
        setArrayChannels(buff);
    }, [channels]);

    //Case we update : New Channel created | Joined a new channel
    const leaveChannel = React.useCallback(
        (channelName: string, username: string) => {
            const buffChannel = new Map(channels);
            socket?.emit('userLeavingChannel', {
                channelName: channelName,
                user: username,
            });
            if (buffChannel) {
                buffChannel.delete(channelName);
                /*
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
                }*/
                //Do we ask the back to assure that we correctly leaved the channel or not
                setChannels(buffChannel);
                setRenderConversation(false);
            }
        },
        [socket, channels]
    );

    const isAdmin = React.useCallback(() => {
        if (channels && conversationInfo) {
            const channel = channels.get(conversationInfo?.name);
            if (channel) {
                for (let i = 0; i < channel.admins.length; i++) {
                    if (channel.admins[i] == user?.id) {
                        return true;
                    }
                }
            }
        }

        return false;
    }, [channels, conversationInfo, user]);

    const isChannelOwner = React.useCallback(() => {
        if (channels && conversationInfo) {
            const channel = channels.get(conversationInfo?.name);
            if (channel && channel.owner == user?.id) return true;
        }
        return false;
    }, [channels, conversationInfo, user]);

    const addChannel = React.useCallback(
        (channel: Channel) => {
            const buffChannel = new Map(channels);

            buffChannel.set(channel.name, channel);
            setConversationInfo({
                ischannel: true,
                isUser: false,
                name: channel.name,
            });
            setChannels(buffChannel);
        },
        [channels, setConversationInfo]
    );

    const initChannels = React.useCallback(
        (channelsArray: Channel[]) => {
            channels?.clear();
            const buffChannel = new Map(channels);
            setArrayChannels([]);
            channelsArray.map((channel) => {
                buffChannel.set(channel.name, channel);
                setArrayChannels([...arrayChannels, channel]);
            });
            setChannels(buffChannel);
        },
        [channels, arrayChannels, setArrayChannels]
    );

    const isBlocked = React.useCallback(
        (id: number) => {
            for (
                let i = 0;
                user && user.blocked && i < user?.blocked?.length;
                i++
            ) {
                if (user?.blocked[i] == id) {
                    return true;
                }
            }
            return false;
        },
        [user]
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
            Banned: false,
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
    }, [socket, addChannel, initChannels]);

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
            isAdmin,
            setRenderConversation,
            renderConversation,
            isBlocked,
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
            isAdmin,
            setRenderConversation,
            renderConversation,
            isBlocked,
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
