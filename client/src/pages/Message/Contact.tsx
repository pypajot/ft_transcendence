import React, { useEffect, useState } from "react";
import { useSocketContext } from "../../Context/socket-context";
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

//Possible to have channel Or People

//Should display the name of the people with his picture
//Or the Channel Name if it is a channel

//How to list all contact ?

//I should get all friends of the User Logs in the DB

//For the moment i will just display all user

interface ContactProps {
  setConversation: (val: string) => void;
  contact: string;
}

export const Contact: React.FC<ContactProps> = ({
  setConversation,
  contact,
}) => {
  const [friends, setFriends] = useState<User[]>();
  const getName = () => {
    const name = localStorage.getItem("username");
    if (!name) {
      return "";
    } else {
      return name;
    }
  };

  useEffect(() => {
    getFriendsList(getName()).then((res: User[]) => {
      console.log(res);
      setFriends(res);
    });
  }, []);
  //Ask the back for the userList
  return (
    <>
      {friends != undefined &&
        friends.map(function (user, i) {
          return (
            <div key={i}>
              <ContactElement
                content={user.username}
                setConversation={setConversation}
              ></ContactElement>
            </div>
          );
        })}
    </>
  );
};
