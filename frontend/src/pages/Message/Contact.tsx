import { useEffect, useState } from 'react';
import { ContactElement } from './ContactElement';
import { useAuth } from '../../context/AuthContext';
import { useChatContext } from '../../context/ChatContext';
import { Channel } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';
import './Contact.css'
import { CreateNewConversation } from './CreateNewConversation';
import { JoinChannel } from './JoinChannel';
import { AddFriends } from './AddFriends';
import { useSocketContext } from '../../context/WebSocketContext';
import BlockUser from './BlockUser';

export const Contact = () => {
    const [username, setUsername] = useState<string>('');

    const { user } = useAuth();
    const chatContext = useChatContext();
    const channelContext = useChannelContext();
	const [open, setOpen] = useState<string | null>(null);
	const [friendError, setFriendError] = useState<string>("");
	const {socketError} = useSocketContext();

    const getName = () => {
        if (!user) {
            return '';
        } else {
            return user.username;
        }
    };

    useEffect(() => {
        const res = getName();

        if (res == '') {
            return;
        } else {
            setUsername(res);
        }
    }, [user]);
	
	useEffect(() => {
		if (!socketError) return;
		if (socketError.func === 'addFriend' || socketError.func === "joinChannel") {
			setFriendError(socketError.msg);
			
		}
	}, [socketError]);
    
    const [conversationList, setConversationList] = useState<Channel[]>([]);

    useEffect(() => {
        setConversationList(channelContext.arrayChannels);
    }, [channelContext.arrayChannels]);

	const ChangeTabToFriends = () => {
		chatContext.setTabDisplay("friends");
		setOpen(null);
	}

	const ChangeTabToChannel = () => {
		chatContext.setTabDisplay("channel");
		setOpen(null);
	}

	const FriendsTab = () => {
		return (
			<div className="tab-content">
				<div>
					<AddFriends open={open} setOpen={setOpen} friendError={friendError} setFriendError={setFriendError}/>
				</div>
				<div>
					<BlockUser open={open} setOpen={setOpen} friendError={friendError} setFriendError={setFriendError}/>
				</div>
				{username &&
					user?.friends &&
					user.friends.map((user) => {
						if (chatContext.isBlocked(user.id)) {
							return;
						}
						return (
							<div className='friend-name' key={"user_" + user.username}>
								<ContactElement
									info={{
										isChannel: false,
										isUser: true,
										user: user,
									}}></ContactElement>
							</div>
						);
					})}
			</div>
		)
	}

	const ChannelTab = () => {
		return (
			<div className="tab-content">
				<div>
					<div>
						<CreateNewConversation  open={open} setOpen={setOpen}/>
					</div>
					<div>
						<JoinChannel open={open} setOpen={setOpen} friendError={friendError} setFriendError={setFriendError}/>
					</div>
				</div>
				{username &&
					conversationList.map((channel) => {
						return (
							<div className='channel-name'
								key={"channel_" + channel.name}>
								<ContactElement
									info={{
										isChannel: true,
										isUser: false,
										channel: channel,
									}}></ContactElement>
							</div>
						);
					})}
			</div>
		)
	}

	return (
		<>
			<div className="wrapper">
				<div className="tabs">
					<div className={chatContext.tabDisplay === "friends" ? "active-tab" : "inactive-tab"} onClick={ChangeTabToFriends}>
						<h4>Friends</h4>
					</div>
					<div className={chatContext.tabDisplay === "channel" ? "active-tab" : "inactive-tab"} onClick={ChangeTabToChannel}>
						<h4>Channel</h4>
					</div>
				</div>
				{chatContext.tabDisplay === "friends" ? <FriendsTab /> : <ChannelTab />}
			</div>
		</>
	)
};
