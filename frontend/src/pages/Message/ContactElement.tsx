import { Box, SidebarBody, useMenuState } from '@twilio-paste/core';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { ContactType } from '../../../Types/contact.entity';
import { useChatContext } from '../../context/ChatContext';
import "./ContactElement.css"

const statusIcon = {
	online: "\u{1F7E2}",
	offline: '\u{1F534}'  ,
	ingame: "\u{1F3AE}",
}

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

	const User = () => {
		if (content.channel)
			return (
				<h3 className='contact-name' color="white" onClick={() => handleContact(content)}>
                    {content.name.length > 12 ? content.name.substring(12,0) + "..." : content.name}
                </h3>
		)
		return (
			<div className='contact'>
				<img src={content.picture} width={50} height={50}/>
				<h3 className='contact-name' color="white" onClick={() => handleContact(content)}>
                    {content.name.length > 12 ? content.name.substring(12,0) + "..." : content.name}
                </h3>
				<h3>
					{statusIcon[content.status as keyof typeof statusIcon]}
				</h3>
			</div>
		);
	}

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
                paddingX="space0"
                paddingTop="space20"
				paddingLeft="space10"
				paddingRight="space40"
				minWidth={300}
				maxWidth={300}
				minHeight={60}
				maxHeight={60}>
                <SidebarBody>
					<User />
                </SidebarBody>
            </Box>
        </div>
    );
};
