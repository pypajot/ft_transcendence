import { Box, SidebarBody, useMenuState } from '@twilio-paste/core';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { ContactType } from '../../../Types/contact.entity';
import { useChatContext } from '../../context/ChatContext';

export const ContactElement = ({ content }: { content: ContactType }) => {
    const chatContext = useChatContext();

    const handleContact = (content: ContactType) => {
        const conversationInfo: ConversationInformation = {
            ischannel: content.channel,
            isUser: content.user,
            name: content.name,
        };
        chatContext.setConversationInfo(conversationInfo);
    };
    const menu = useMenuState();

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
                    <h3 color="white" onClick={() => handleContact(content)}>
                        {content.name}
                    </h3>
                </SidebarBody>
            </Box>
        </div>
    );
};
