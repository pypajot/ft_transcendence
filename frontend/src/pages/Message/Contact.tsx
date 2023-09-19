import React, { useEffect, useState } from "react";
import { useSocketContext } from "../../context/WebSocketContext";
import {
  Box,
  Button,
  Sidebar,
  SidebarBody,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarNavigation,
  SidebarOverlayContentWrapper,
} from "@twilio-paste/core";
import { User } from "../../../public/Types/user.entity";
import { ContactElement } from "./ContactElement";
import { getFriendsList } from "./Hooks/GetFriendsList";
import { useAuth } from "../../context/AuthContext";
import { ContactType } from "../../../public/Types/contact.entity";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";
import { setFips } from "crypto";

//Possible to have channel Or People

//Should display the name of the people with his picture
//Or the Channel Name if it is a channel

//How to list all contact ?

//I should get all friends of the User Logs in the DB

//For the moment i will just display all user

interface ContactProps {
  setConversation: (val: ConversationInformation) => void;
}

export const Contact: React.FC<ContactProps> = ({ setConversation }) => {
  const [friends, setFriends] = useState<ContactType[]>();
  const [username, setUsername] = useState<string>("");
  const [newFriend, setnewFriend] = useState<boolean>(false);

  const { user } = useAuth();

  const getName = () => {
    if (!user) {
      return "";
    } else {
      return user.username;
    }
  };

  useEffect(() => {
    const res = getName();

    if (res == "") {
      return;
    } else {
      setUsername(res);
    }
  }, [user, setFriends]);

  //Request the back (Should Get all Message from a certain User)
  //Then check on all message to list all conversation / Channel Or nOt
  //If not channel then link to the user
  //Return a list of string Channel And User

  useEffect(() => {
    console.log("bkl");
    if (username === "") return;
    getFriendsList(username).then((res: ContactType[]) => {
      setFriends(res);
    });
  }, [newFriend, username]);
  //Ask the back for the userList
  return (
    <>
      {username &&
        friends != undefined &&
        friends.map(function (user, i) {
          return (
            <div key={i}>
              <ContactElement
                content={user}
                setConversation={setConversation}
              ></ContactElement>
            </div>
          );
        })}
    </>
  );
};
