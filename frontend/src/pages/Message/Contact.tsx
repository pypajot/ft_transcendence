import React, { useContext, useEffect, useState } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { ContactElement } from './ContactElement';
import { getFriendsList } from './Hooks/GetFriendsList';
import { useAuth } from '../../context/AuthContext';
import { ContactType } from '../../../public/Types/contact.entity';
import { Channel, useChatContext } from '../../context/ChatContext';
import { ProfileContext } from '../../context/ProfileContext';
import { channel } from 'diagnostics_channel';
import { Socket } from 'socket.io-client';

export const Contact = () => {
    const [username, setUsername] = useState<string>('');

    const { user } = useAuth();
    const chatContext = useChatContext();
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
    console.log(chatContext.channels);
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
        setConversationList(chatContext.arrayChannels);
        console.log(chatContext.arrayChannels);
    }, [chatContext.arrayChannels]);
    return (
        <>
            <div>
                <h1> Channel </h1>
                {username &&
                    conversationList.map((channel) => {
                        return (
                            <div key={channel.id}>
                                <ContactElement
                                    content={{
                                        channel: true,
                                        user: false,
                                        name: channel.name,
                                    }}></ContactElement>
                            </div>
                        );
                    })}
            </div>
            <h1> Friend </h1>
            {username &&
                friends &&
                friends.map((user, i) => {
                    return (
                        <div key={i}>
                            <ContactElement
                                content={{
                                    channel: false,
                                    user: true,
                                    name: user.username,
                                }}></ContactElement>
                        </div>
                    );
                })}
        </>
    );
};
