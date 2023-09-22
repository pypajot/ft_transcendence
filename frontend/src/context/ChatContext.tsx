import * as React from "react";
import { ConversationInformation } from "../../public/Types/conversationInformation.entity";
import { createContext, useContext, useMemo, useState } from "react";
import { User } from "./AuthContext";
import { useSocketContext } from "./WebSocketContext";

export interface Channel {
  members: User[];
  name: string;
  picture?: string;
}

type ChatContext = {
  conversationInfo: ConversationInformation | undefined;
  setConversationInfo: (
    coversationInfo: ConversationInformation | undefined
  ) => void;
  channelIn: Channel[] | undefined;
  leaveChannel: (channelName: string, username: string) => void;
};

type ChatContextProviderProps = {
  children: React.ReactNode;
};
export const ChatContext = createContext<ChatContext | undefined>(undefined);

export default function ChatContextProvider(props: ChatContextProviderProps) {
  const [conversationInfo, setConversationInfo] = useState<
    ConversationInformation | undefined
  >(undefined);
  const [channelIn, setChannelIn] = useState<Channel[] | undefined>(undefined);
  const socket = useSocketContext();

  //Case we update : New Channel created | Joined a new channel
  const leaveChannel = (channelName: string, username: string) => {
    socket?.emit("userLeavingChannel", {
      chanelName: channelName,
      user: username,
    });

    //Do we ask the back to assure that we correctly leaved the channel or not
    setChannelIn(
      channelIn?.filter((channel) => {
        if (channel.name == channelName) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  const addChannel = (channel: Channel) => {
    if (channelIn == undefined) {
      setChannelIn([channel]);
    } else {
      setChannelIn([...channelIn, channel]);
    }
  };
  const initChannels = (channels: Channel[]) => {
    setChannelIn(channels);
  };

  React.useEffect(() => {
    socket?.on("InitChannels", initChannels);
    socket?.on("successfullyJoinedChannel", addChannel);
    return () => {
      socket?.off("successfullyJoinedChannel", addChannel);
      socket?.off("InitChannels", initChannels);
    };
  }, [socket, addChannel, initChannels]);

  const value = useMemo(
    () => ({
      conversationInfo,
      setConversationInfo,
      channelIn,
      leaveChannel,
    }),
    [conversationInfo, setConversationInfo, channelIn, leaveChannel]
  );
  return (
    <ChatContext.Provider value={value}>{props.children}</ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);

  if (context == undefined) {
    throw new Error(
      "You need to use ChatContext with in a ChatContextProvider"
    );
  }
  return context;
}
