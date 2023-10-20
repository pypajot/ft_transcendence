import { Conversation } from './Conversation';
import { Box, Flex } from '@twilio-paste/core';
import { Contact } from './Contact';
import Navbar from '../../components/Navbar';


const ChatComponent = () => {

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
