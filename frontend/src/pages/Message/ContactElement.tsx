import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { useChatContext } from '../../context/ChatContext';
import './ContactElement.css';

const statusIcon = {
    online: (
        <img
            src="https://i.imgur.com/4xHiH5S.png"
            className="online-button"></img>
    ),
    offline: (
        <img
            src="https://i.imgur.com/MqO4Ymr.png"
            className="online-button"></img>
    ),
    ingame: (
        <img
            src="https://i.imgur.com/wNqOZav.png"
            className="online-button"></img>
    ),
};

export const ContactElement = ({ info }: { info: ConversationInformation }) => {
    const { conversationInfo, setConversationInfo, setRenderConversation } =
        useChatContext();

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
                <div className="img-container">
                    <img className="contact-image" src={info?.user?.avatar} />
                </div>
                <h3
                    className="contact-name"
                    color="white"
                    onClick={() => handleClick()}>
                    {info.user && info.user.username.length > 12
                        ? info.user.username.substring(12, 0) + '...'
                        : info?.user?.username}
                </h3>
                <h3 className="status-icon">
                    {statusIcon[info?.user?.status as keyof typeof statusIcon]}
                </h3>
            </div>
        );
    };
    const handleClick = () => {
        if (
            info?.channel?.name !== conversationInfo?.channel?.name ||
            info?.user?.username !== conversationInfo?.user?.username
        ) {
            setConversationInfo(info);
        }
		setRenderConversation(true);
        // if (!renderConversation)
        // 	setRenderConversation(true);
    };

    return <User />;
};
