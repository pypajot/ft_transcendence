import React, { useEffect, useState } from 'react'
import { useSocketContext } from '../../Context/socket-context'
import { Box, Button, Sidebar, SidebarBody, SidebarCollapseButton, SidebarFooter, SidebarHeader, SidebarHeaderIconButton, SidebarHeaderLabel, SidebarNavigation, SidebarOverlayContentWrapper } from '@twilio-paste/core';
import { User } from '../../../public/Types/user.entity'
import { ContactElement } from './ContactElement';

//Possible to have channel Or People

//Should display the name of the people with his picture
//Or the Channel Name if it is a channel

//How to list all contact ?

//I should get all friends of the User Logs in the DB

//For the moment i will just display all user

export default function Contact({setConversation}: {
    setConversation: (val: string) => void
    }) {
    const [friends, setFriends] = useState<User[]>()
    const socket = useSocketContext();
    let sidebarNavigationSkipLinkID = '1';
    let topbarSkipLinkID = '2';
    let mainContentSkipLinkID = '3';

    useEffect (() => 
    {
        socket?.emit("GetFriendsList");
        socket?.on("ResponseGetFriendsList", function(UserList: any) {
            if (UserList)
                setFriends(UserList)
        })
    }, [socket])
    console.log(friends);
    //Ask the back for the userList

    
  return (
    <>
        <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={false}
        variant="default"
        >
        <SidebarHeader>
            <SidebarHeaderLabel>Contact</SidebarHeaderLabel>
        </SidebarHeader>
        {friends != undefined && friends.map(function(user, i){
            return (<div key={i}>
                <ContactElement content={user.username} setConversation={setConversation}></ContactElement>
            </div>)
        })}
        <SidebarFooter>
            <SidebarCollapseButton
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
            />
        </SidebarFooter>
        </Sidebar>

        <SidebarOverlayContentWrapper collapsed={false} variant="default">
        </SidebarOverlayContentWrapper>
        </>
  )
}
