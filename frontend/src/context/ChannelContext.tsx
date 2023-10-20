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
    emitDeleteChannel: (channelName: string) => void;
    channels: Map<string, Channel> | undefined;
    arrayChannels: Channel[];
    isBan: (userId: number) => boolean;
    isMute: (userId: number) => boolean;
    invitedList: Channel[];
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
    const [invitedList, setInvitedList] = React.useState<Channel[]>([]);

    React.useEffect(() => {
        const buff: Channel[] = [];
        if (channels) {
            for (const channel of channels) {
                buff.push(channel[1]);
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
            socket?.emit('userLeavingChannel', {
                channelName: channelName,
                user: username,
            });
            if (channels) {
                channels.delete(channelName);
                setChannels(channels);
                chatContext.setRenderConversation(false);
                const newArrayChannels = arrayChannels.filter(
                    (channelInArr) => {
                        if (channelName == channelInArr.name) {
                            return false;
                        }
                        return true;
                    }
                );
                setArrayChannels(newArrayChannels);
            }
            chatContext.setConversationInfo(undefined);
        },
        [socket, channels, setChannels, chatContext.setRenderConversation]
    );

    const addChannel = React.useCallback(
        (channel: Channel) => {
            const buffChannel = new Map(channels);

            buffChannel.set(channel.name, channel);
            chatContext.conversationInfo = {
                isChannel: true,
                isUser: false,
                channel: channel,
            };
            setChannels(buffChannel);
            chatContext.setConversationInfo(chatContext.conversationInfo);
            chatContext.setRenderConversation(true);
        },
        [
            channels,
            chatContext.setConversationInfo,
            setChannels,
            chatContext.conversationInfo,
        ]
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
        },
        [user, channels, setChannels, arrayChannels, setArrayChannels]
    );

    const updateInviteChannel = React.useCallback(
        (channels: Channel[]) => {
            setInvitedList(channels);
        },
        [setInvitedList]
    );

    const handleGettingKicked = React.useCallback(
        (channelName: string) => {
            if (user) {
                leaveChannel(channelName, user.username);
            }
        },
        [user, leaveChannel]
    );

    const deleteChannel = React.useCallback(
        (channelName: string) => {
            const test = channels && channels.get(channelName);
            const newMap = channels;
            newMap?.delete(channelName);
            const newArray = arrayChannels;
            test && newArray.splice(newArray.indexOf(test), 1);
            setArrayChannels(newArray);
            setChannels(newMap);
            chatContext.setConversationInfo(undefined);
            chatContext.setRenderConversation(false);
        },
        [channels, arrayChannels]
    );

    const emitDeleteChannel = React.useCallback(
        (channelName: string) => {
            socket?.emit('deleteChannel', {
                channelName: channelName,
            });
        },
        [socket]
    );

    React.useEffect(() => {
        socket?.on('successfullyJoinedChannel', addChannel);
        socket?.on('InitChannels', initChannels);
        socket?.on('Kicked', handleGettingKicked);
        socket?.on('updateChannel', updateChannel);
        socket?.on('deleteChannel', deleteChannel);
        socket?.on('updateInvited', updateInviteChannel);

        return () => {
            socket?.off('InitChannels', initChannels);
            socket?.off('successfullyJoinedChannel', addChannel);
            socket?.off('Kicked', handleGettingKicked);
            socket?.off('updateChannel', updateChannel);
            socket?.off('deleteChannel', deleteChannel);
            socket?.off('updateInvited', updateInviteChannel);
        };
    }, [
        socket,
        updateChannel,
        addChannel,
        initChannels,
        handleGettingKicked,
        deleteChannel,
    ]);

    const isBan = React.useCallback(
        (userId: number) => {
            let res = false;
            if (
                chatContext.conversationInfo?.channel &&
                channels &&
                channels.get(chatContext.conversationInfo.channel.name)?.info
            ) {
                channels
                    .get(chatContext.conversationInfo.channel.name)
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
            if (channels && chatContext.conversationInfo?.channel) {
                const channel = channels.get(
                    chatContext.conversationInfo?.channel.name
                );
                if (channel && channel.owner == targetId) return true;
            }
            return false;
        },
        [channels, chatContext.conversationInfo, user]
    );

    const isAdmin = React.useCallback(() => {
        if (channels && chatContext.conversationInfo?.channel) {
            const channel = channels.get(
                chatContext.conversationInfo?.channel.name
            );
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
            if (chatContext.conversationInfo?.channel && channels) {
                channels
                    .get(chatContext.conversationInfo.channel.name)
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
            emitDeleteChannel,
            invitedList,
        }),
        [
            channels,
            leaveChannel,
            arrayChannels,
            isChannelOwner,
            isAdmin,
            isBan,
            isMute,
            emitDeleteChannel,
            invitedList,
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
