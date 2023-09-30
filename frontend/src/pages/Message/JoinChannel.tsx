import {
    Box,
    Button,
    Input,
    Popover,
    PopoverButton,
    PopoverContainer,
    StatusBadge,
} from '@twilio-paste/core';
import { useCallback, useEffect, useState } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { useChatContext } from '../../context/ChatContext';

export const JoinChanel = () => {
    const [password, setPassword] = useState('');
    const [channelName, setChannelName] = useState('');
    const [requestPassword, setReqPassword] = useState(false);
    const { socket } = useSocketContext();
    const chatContext = useChatContext();

    const joinChannel: any = () => {
        socket?.emit('JoinChannel', { name: channelName, pass: password });
        //Checker que on a bien join puis
        // setConversation(channelName);
    };

    const handleReqPassword = useCallback(() => {
        setReqPassword(true);
        //Reset Error ?
    }, [setReqPassword]);

    const enterConversation = useCallback(
        (arg: any) => {
            const convInfo: ConversationInformation = {
                isChannel: true,
                isUser: false,
                channel: arg,
            };
            chatContext.setConversationInfo(convInfo);
        },
        [chatContext]
    );

    useEffect(() => {
        socket?.on('requestPassword', handleReqPassword);
        socket?.on('successfullyJoinedChannel', enterConversation);
        return () => {
            socket?.off('requestPassword', handleReqPassword);
            socket?.off('successfullyJoinedChannel', enterConversation);
        };
    }, [socket, enterConversation, handleReqPassword]);

    const errorName =
        chatContext.error.noSuchChannelName &&
        !chatContext.error.wrongPrivileges;
    const errorPriv =
        !chatContext.error.noSuchChannelName &&
        chatContext.error.wrongPrivileges;
    const banned = !errorPriv && !errorName && chatContext.error.Banned;

    return (
        <Box display="flex">
            <PopoverContainer baseId="joinChannel">
                <PopoverButton variant="primary">Join a Channel</PopoverButton>
                <Popover aria-label="FriendRequest" width="size30">
                    <Input
                        type="text"
                        id={'joinChannelId'}
                        placeholder="Enter a Channel"
                        onChange={(e) => {
                            setChannelName(e.target.value);
                            chatContext.resetError();
                            setReqPassword(false);
                            setPassword('');
                        }}
                    />
                    {errorName && (
                        <Box display="flex" columnGap="space40">
                            <StatusBadge as="span" variant="ProcessError">
                                No such channel
                            </StatusBadge>
                        </Box>
                    )}
                    {errorPriv && (
                        <Box display="flex" columnGap="space40">
                            <StatusBadge as="span" variant="ProcessError">
                                This channel is private
                            </StatusBadge>
                        </Box>
                    )}
                    {requestPassword && (
                        <>
                            <Input
                                type="password"
                                id={'PasswordFieldId'}
                                placeholder="Enter a Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    chatContext.resetError();
                                }}
                            />
                            {chatContext.error.wrongPassword && (
                                <Box display="flex" columnGap="space40">
                                    <StatusBadge
                                        as="span"
                                        variant="ProcessError">
                                        Wrong Password
                                    </StatusBadge>
                                </Box>
                            )}
                        </>
                    )}
                    {banned && (
                        <Box display="flex" columnGap="space40">
                            <StatusBadge as="span" variant="ProcessError">
                                You have been ban
                            </StatusBadge>
                        </Box>
                    )}
                    <Button variant="primary" onClick={joinChannel}>
                        Join !
                    </Button>
                </Popover>
            </PopoverContainer>
        </Box>
    );
};
