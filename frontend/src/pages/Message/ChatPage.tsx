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
    const [inviter_id, setInviter_id] = useState<number>(0);
    const [mode, setMode] = useState<string>('');
    const [key, setKey] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        socket?.on('invitedToPlay', (opp_username:string, opp_id:number, mode: string) => {

            console.log('you have been invited to play');
            setGameInvite(true);
            setInviter(opp_username);
            setInviter_id(opp_id);
            setMode(mode);
            setKey(prevkey => prevkey + 1);
        });

        socket?.on('repliedGameInvite', (reply: boolean, from: string, mode: string) => {
            if (reply) {
                const opp_SocketId = from;
                console.log(from + ' accepted the game');
                socket?.emit('launchGameFromChat', { opp_SocketId, mode });
                navigate('/game', { state: { mode: true } });
            } 
            else {
                console.log(from + ' declined the game');
            }
        });
    
        return () => {
            socket?.off('invitedToPlay');
            socket?.off('repliedGameInvite');
        };
    }, [socket, key, mode]);

    return (
        <>
            <TopbarMenu />
            { gameInvite && (<PopUpInvite mykey={key} from={inviter} from_id={inviter_id} mode={mode}/>)}
            <Flex>
                <Flex>
                    <Box
                        backgroundColor="colorBackgroundDecorative10Weakest"
                        padding="space40"
                        width="100%">
                        <Contact />
                    </Box>
                </Flex>
                <Flex grow>
                    <Box
                        backgroundColor="colorBackgroundDecorative10Weakest"
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
