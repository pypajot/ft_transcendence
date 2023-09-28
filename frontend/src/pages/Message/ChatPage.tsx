import { useEffect } from 'react';
import { Conversation } from './Conversation';
import { Box, Flex } from '@twilio-paste/core';
import { Contact } from './Contact';
import { TopbarMenu } from './TopMenu';
import { useSocketContext } from '../../context/WebSocketContext';
import { useNavigate } from 'react-router-dom';

const ChatComponent = () => {
    const { socket } = useSocketContext();
    const navigate = useNavigate();

    useEffect(() => {
        socket?.on('invitedToPlay', (data: any) => {
            console.log('you have been invited to play');
            socket?.emit('launchGameFromChat', { opp_SocketId: data, mode: 'Classic' });
            navigate('/game', { state: { mode: true } });
        });
    
        return () => {
            socket?.off('invitedToPlay');
        };
    }, [socket]);    

    return (
        <>
            <TopbarMenu />
            <Flex>
                <Flex>
                    <Box
                        backgroundColor="colorBackgroundDecorativWeakest"
                        padding="space40"
                        width="100%">
                        <Contact />
                    </Box>
                </Flex>
                <Flex grow>
                    <Box
                        backgroundColor="colorBackgroundDecorativWeakest"
                        padding="space40"
                        width="100%">
                        <Conversation />
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export default ChatComponent;
