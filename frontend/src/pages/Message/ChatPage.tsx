import { useState, useEffect } from 'react';
import { Conversation } from './Conversation';
import { Box, Flex } from '@twilio-paste/core';
import { Contact } from './Contact';
import { TopbarMenu } from './TopMenu';
import { useSocketContext } from '../../context/WebSocketContext';
import { useNavigate } from 'react-router-dom';
import { PopUpInvite } from './PopUpInvite';

const ChatComponent = () => {
    const { socket } = useSocketContext();
    const [gameInvite, setGameInvite] = useState<boolean>(false);
    const [inviter, setInviter] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        socket?.on('invitedToPlay', (opp_SocketId:string, opp_username:string, mode: string) => {

            console.log('you have been invited to play');
            setGameInvite(true);
            setInviter(opp_username);
            socket?.emit('launchGameFromChat', { opp_SocketId, mode});
            //navigate('/game', { state: { mode: true } });
        });
    
        return () => {
            socket?.off('invitedToPlay');
        };
    }, [socket]);

    return (
        <>
            <TopbarMenu />
            { gameInvite && (<PopUpInvite from={inviter}/>)}
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
