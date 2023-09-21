import React, { useEffect, useState } from "react";
import { useSocketContext } from "../../context/WebSocketContext";
import { ContactElement } from "./ContactElement";
import { getFriendsList } from "./Hooks/GetFriendsList";
import { useAuth } from "../../context/AuthContext";
import { ContactType } from "../../../public/Types/contact.entity";

//Possible to have channel Or People

//Should display the name of the people with his picture
//Or the Channel Name if it is a channel

//How to list all contact ?

//I should get all friends of the User Logs in the DB

//For the moment i will just display all user

export const Contact = () => {
  const [friends, setFriends] = useState<ContactType[]>([]);
  const [username, setUsername] = useState<string>("");

  const { user } = useAuth();
  const socket = useSocketContext();

  const getName = () => {
    if (!user) {
      return "";
    } else {
      return user.username;
    }
  };

  const refreshContacts = (arg: any) => {
    getFriendsList(username).then((res: ContactType[]) => {
      setFriends(res);
    });
  };

  useEffect(() => {
    socket?.on("successfullyJoinedChannel", refreshContacts);
    socket?.on("goodFriendsRequest", refreshContacts);
    return () => {
      socket?.off("successfullyJoinedChannel", refreshContacts);
      socket?.off("goodFriendsRequest", refreshContacts);
    };
  }, [socket]);

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
    if (username === "") return;
    getFriendsList(username).then((res: ContactType[]) => {
      setFriends(res);
      console.log(res);
    });
  }, [username]);
  //Ask the back for the userList
  return (
    <>
      {username &&
        friends != undefined &&
        friends.map(function (user, i) {
          return (
            <div key={i}>
              <ContactElement content={user}></ContactElement>
            </div>
          );
        })}
    </>
  );
};
