import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { useChatContext } from '../../context/ChatContext';
import './ContactElement.css';

const statusIcon = {
    online: '\u{1F7E2}',
    offline: '\u{1F534}',
    ingame: '\u{1F3AE}',
};

export const ContactElement = ({ info }: { info: ConversationInformation }) => {
    const chatContext = useChatContext();

    const User = () => {
        if (info.isChannel && info.channel)
            return (
                <h3
                    className="contact-name"
                    color="white"
                    onClick={() => handleClick()}>
                    {info.channel.name.length > 12
                        ? info.channel.name.substring(12, 0) + '...'
                        : info.channel.name}
                </h3>
            );
        return (
            <div className="contact">
                <img className='contact-image' src={info?.user?.avatar} width={50} height={50} />
                <h3
                    className="contact-name"
                    color="white"
                    onClick={() => handleClick()}>
                    {info.user && info.user.username.length > 12
                        ? info.user.username.substring(12, 0) + '...'
                        : info?.user?.username}
                </h3>
                <h3>
                    {statusIcon[info?.user?.status as keyof typeof statusIcon]}
                </h3>
            </div>
        );
    };
    const handleClick = () => {
        chatContext.setConversationInfo(info);
        // console.log(info);
        chatContext.setRenderConversation(true);
    };

    return (
			<User />
    );
};
