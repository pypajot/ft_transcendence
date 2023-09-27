import { Conversation } from './Conversation';
import { Box, Flex } from '@twilio-paste/core';
import { Contact } from './Contact';
import { TopbarMenu } from './TopMenu';

const ChatComponent = () => {
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
