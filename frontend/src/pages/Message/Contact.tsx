import { useContext, useEffect, useState } from 'react';
import { ContactElement } from './ContactElement';
import { useAuth } from '../../context/AuthContext';
import { useChatContext } from '../../context/ChatContext';
import { ProfileContext } from '../../context/ProfileContext';
import { Channel } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';
import { ContactType } from '../../../Types/contact.entity';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import './Contact.css'
import { CreateNewConversation } from './CreateNewConversation';
import { JoinChanel } from './JoinChannel';
import { InviteToChannel } from './InviteToChannel';
import { AddFriends } from './AddFriends';

export const Contact = () => {
    const [username, setUsername] = useState<string>('');

    const { user } = useAuth();
    const chatContext = useChatContext();
    const channelContext = useChannelContext();
    const friends = useContext(ProfileContext).friendList;
    //  const [dataLoaded, setDataLoaded] = useState(false);
    /*
    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setDataLoaded(true);
        }, 200);
    }, []);*/

    const getName = () => {
        if (!user) {
            return '';
        } else {
            return user.username;
        }
    };
    /*
  useEffect(() => {
    socket?.on("goodFriendsRequest", refreshContacts);
    return () => {
      socket?.off("goodFriendsRequest", refreshContacts);
    };
  }, [socket]);
  */

    useEffect(() => {
        const res = getName();

        if (res == '') {
            return;
        } else {
            setUsername(res);
        }
    }, [user]);
    //Request the back (Should Get all Message from a certain User)
    //Then check on all message to list all conversation / Channel Or nOt
    //If not channel then link to the user
    //Return a list of string Channel And User

    //Ask the back for the userList
    //   const contactList = friendList?.map(function (user, i) {
    // 	return (
    // 	  <div key={i}>
    // 		<ContactElement
    // 		  content={user.username}
    // 		  setConversation={setConversation}
    // 		></ContactElement>
    // 	  </div>
    // 	);
    //   })
    const [conversationList, setConversationList] = useState<Channel[]>([]);

    useEffect(() => {
        setConversationList(channelContext.arrayChannels);
    }, [channelContext.arrayChannels]);

    // return (
    //     <>
    //         <div>
    //             <h1> Channel </h1>
    //             {username &&
    //                 conversationList.map((channel) => {
    //                     return (
    //                         <div key={channel.id}>
    //                             <ContactElement
    //                                 info={{
    //                                     isChannel: true,
    //                                     isUser: false,
    //                                     channel: channel,
    //                                 }}></ContactElement>
    //                         </div>
    //                     );
    //                 })}
    //         </div>
    //         <h1> Friend </h1>
    //         {username &&
    //             user?.friends &&
    //             user.friends.map((user) => {
    //                 if (chatContext.isBlocked(user.id)) {
    //                     return;
    //                 }
    //                 return (
    //                     <div key={user.id}>
    //                         <ContactElement
    //                             info={{
    //                                 isChannel: false,
    //                                 isUser: true,
    //                                 user: user,
    //                             }}></ContactElement>
    //                     </div>
    //                 );
    //             })}
    //     </>
    // );
	return (
		<>
			<div className="wrapper">
				<div className="tabs">
					<div className="tab">
						<input type="radio" name="css-tabs" id="tab-1" checked className="tab-switch" />
						<label htmlFor="tab-1" className="tab-label">Channel</label>
						<div className="tab-content">
							<div>
								<CreateNewConversation />
								<JoinChanel />
							</div>
							{username &&
								conversationList.map((channel) => {
									return (
										<div key={channel.id}>
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
					</div>
					<div className="tab">
						<input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
						<label htmlFor="tab-2" className="tab-label">Friends</label>
						<div className="tab-content">
							<div>
								{/* <AddFriends /> */}
							</div>
							{username &&
								user?.friends &&
								user.friends.map((user) => {
									if (chatContext.isBlocked(user.id)) {
										return;
									}
									return (
										<div key={user.id}>
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
					</div>
				</div>
			</div>
		</>
	)
};
