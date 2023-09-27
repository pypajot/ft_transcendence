import { Conversation } from './Conversation';
import { Box, Flex } from '@twilio-paste/core';
import { Contact } from './Contact';
import { TopbarMenu } from './TopMenu';
import { useSocketContext } from '../../context/WebSocketContext';

const ChatComponent = () => {
    const {socket} = useSocketContext();
    socket?.on('invitedToPlay', (data: any) => {
        console.log('you have been invited to play');
        console.log(data);
        // display a pop up to accept or decline the invitation
        
    });
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
