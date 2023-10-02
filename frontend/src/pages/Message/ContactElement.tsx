import { Box, SidebarBody, useMenuState } from '@twilio-paste/core';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { useChatContext } from '../../context/ChatContext';

export const ContactElement = ({ info }: { info: ConversationInformation }) => {
    const chatContext = useChatContext();

    const menu = useMenuState();

    const handleClick = () => {
        chatContext.setConversationInfo(info);
        console.log(info);
        chatContext.setRenderConversation(true);
    };

    return (
        <div>
            <Box
                borderStyle="solid"
                borderWidth="borderWidth0"
                borderTopWidth="borderWidth10"
                borderColor="colorBorderWeak"
                display="flex"
                flexDirection="row"
                columnGap="space30"
                paddingX="space70"
                paddingTop="space50">
                <SidebarBody>
                    {info.isChannel && (
                        <h3 color="white" onClick={handleClick}>
                            {info?.channel?.name}
                        </h3>
                    )}
                    {info.isUser && (
                        <h3 color="white" onClick={handleClick}>
                            {info?.user?.username}
                        </h3>
                    )}
                </SidebarBody>
            </Box>
        </div>
    );
};
