import { createContext, useContext } from 'react';
import * as React from 'react';
import { Channel } from '../../Types/inferfaceList';
import { useChatContext } from './ChatContext';
import { useSocketContext } from './WebSocketContext';
import { useAuth } from './AuthContext';

type ChannelContext = {
    isAdmin: () => boolean;
    isChannelOwner: (targetId: number) => boolean;
    leaveChannel: (channelName: string, username: string) => void;
    channels: Map<string, Channel> | undefined;
    arrayChannels: Channel[];
    isBan: (userId: number) => boolean;
    isMute: (userId: number) => boolean;
};

type ChannelContextProviderProps = {
    children: React.ReactNode;
};
export const ChannelContext = createContext<ChannelContext | undefined>(
    undefined
);

export default function ChannelContextProvider(
    props: ChannelContextProviderProps
) {
    const [channels, setChannels] = React.useState<
        Map<string, Channel> | undefined
    >(new Map());
    const [arrayChannels, setArrayChannels] = React.useState<Channel[]>([]);
    const chatContext = useChatContext();
    const { socket } = useSocketContext();
    const { user } = useAuth();

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

    const leaveChannel = React.useCallback(
        (channelName: string, username: string) => {
            const buffChannel = new Map(channels);
            socket?.emit('userLeavingChannel', {
                channelName: channelName,
                user: username,
            });
            if (buffChannel) {
                buffChannel.delete(channelName);
                setChannels(buffChannel);
                chatContext.setRenderConversation(false);
            }
            chatContext.setConversationInfo(undefined);
        },
        [socket, channels, setChannels, chatContext.setRenderConversation]
    );

    const addChannel = React.useCallback(
        (channel: Channel) => {
            const buffChannel = new Map(channels);

            buffChannel.set(channel.name, channel);
            chatContext.setConversationInfo({
                ischannel: true,
                isUser: false,
                name: channel.name,
            });
            setChannels(buffChannel);
        },
        [channels, chatContext.setConversationInfo]
    );

    const updateChannel = React.useCallback(
        (channel: Channel) => {
            channels?.set(channel.name, channel);
            setChannels(channels);
            const newArrayChannels = arrayChannels.filter((channelInArr) => {
                if (channel.name == channelInArr.name) {
                    return false;
                }
                return true;
            });
            newArrayChannels.push(channel);
            setArrayChannels(newArrayChannels);
            console.log(user, channels);
        },
        [user, channels, setChannels, arrayChannels, setArrayChannels]
    );

    const handleGettingKicked = React.useCallback(
        (channelName: string) => {
            if (user) {
                leaveChannel(channelName, user.username);
            }
        },
        [user, leaveChannel]
    );

    React.useEffect(() => {
        socket?.on('successfullyJoinedChannel', addChannel);
        socket?.on('InitChannels', initChannels);
        socket?.on('Kicked', handleGettingKicked);
        socket?.on('updateChannel', updateChannel);
        return () => {
            socket?.off('InitChannels', initChannels);
            socket?.off('successfullyJoinedChannel', addChannel);
            socket?.off('Kicked', handleGettingKicked);
            socket?.off('updateChannel', updateChannel);
        };
    }, [socket, updateChannel, addChannel, initChannels, handleGettingKicked]);

    const isBan = React.useCallback(
        (userId: number) => {
            let res = false;
            if (chatContext.conversationInfo && channels) {
                channels
                    .get(chatContext.conversationInfo.name)
                    ?.info.map((moderation) => {
                        if (
                            moderation.type == 'ban' &&
                            userId == moderation.targetId
                        ) {
                            res = true;
                        }
                    });
            }
            return res;
        },
        [chatContext.conversationInfo, channels]
    );

    const isChannelOwner = React.useCallback(
        (targetId: number) => {
            if (channels && chatContext.conversationInfo) {
                const channel = channels.get(
                    chatContext.conversationInfo?.name
                );
                if (channel && channel.owner == targetId) return true;
            }
            return false;
        },
        [channels, chatContext.conversationInfo, user]
    );

    const isAdmin = React.useCallback(() => {
        if (channels && chatContext.conversationInfo) {
            const channel = channels.get(chatContext.conversationInfo?.name);
            if (channel) {
                for (let i = 0; i < channel.admins.length; i++) {
                    if (channel.admins[i] == user?.id) {
                        return true;
                    }
                }
            }
        }
        return false;
    }, [channels, chatContext.conversationInfo, user]);

    const isMute = React.useCallback(
        (userId: number) => {
            let res = false;
            if (chatContext.conversationInfo && channels) {
                channels
                    .get(chatContext.conversationInfo.name)
                    ?.info.map((moderation) => {
                        if (
                            moderation.type == 'mute' &&
                            userId == moderation.targetId
                        ) {
                            res = true;
                        }
                    });
            }
            return res;
        },
        [channels, chatContext]
    );

    const value = React.useMemo(
        () => ({
            channels,
            leaveChannel,
            arrayChannels,
            isChannelOwner,
            isAdmin,
            isBan,
            isMute,
        }),
        [
            channels,
            leaveChannel,
            arrayChannels,
            isChannelOwner,
            isAdmin,
            isBan,
            isMute,
        ]
    );
    return (
        <ChannelContext.Provider value={value}>
            {props.children}
        </ChannelContext.Provider>
    );
}

export function useChannelContext() {
    const context = useContext(ChannelContext);
    if (context == undefined) {
        throw new Error(
            'You need to use ChatContext with in a ChatContextProvider'
        );
    }
    return context;
}
