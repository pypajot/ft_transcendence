import { useState, useEffect } from 'react';
import { Conversation } from './Conversation';
import { Box, Flex } from '@twilio-paste/core';
import { Contact } from './Contact';
import { useSocketContext } from '../../context/WebSocketContext';
import { PopUpInvite } from './PopUpInvite';
import Navbar from '../../components/Navbar';


const ChatComponent = () => {
    // const { socket } = useSocketContext();
    // const [gameInvite, setGameInvite] = useState<boolean>(false);
    // const [inviter, setInviter] = useState<string>('');
    // const [inviter_id, setInviter_id] = useState<number>(0);
    // const [mode, setMode] = useState<string>('');
    // const [key, setKey] = useState<number>(0);

    // useEffect(() => {
    //     socket?.on('invitedToPlay', (opp_username:string, opp_id:number, mode: string) => {

    //         console.log('you have been invited to play');
    //         setGameInvite(true);
    //         setInviter(opp_username);
    //         setInviter_id(opp_id);
    //         setMode(mode);
    //         setKey(prevkey => prevkey + 1);
    //     });
    
    //     return () => {
    //         socket?.off('invitedToPlay');
    //         socket?.off('repliedGameInvite');
    //     };
    // }, [socket, key, mode]);

    return (
        <>
			<Navbar />
            {/* { gameInvite && (<PopUpInvite key={key} from={inviter} from_id={inviter_id} mode={mode}/>)} */}
            <Flex>
                <Contact />
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
