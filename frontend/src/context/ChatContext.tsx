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
  channelRequestList: Channel[] | undefined;
  setChannelRequestList: (channelRequestList: Channel[] | undefined) => void;
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
  const [channelRequestList, setChannelRequestList] = useState<
    Channel[] | undefined
  >(undefined);

  //Case we update : New Channel created | Joined a new channel
  const leaveChannel = React.useCallback(
    (channelName: string, username: string) => {
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
    },
    [setChannelIn, channelIn, socket]
  );

  const addChannel = React.useCallback(
    (channel: Channel) => {
      if (channelIn == undefined) {
        setChannelIn([channel]);
      } else {
        setChannelIn([...channelIn, channel]);
      }
    },
    [setChannelIn, channelIn]
  );

  const initChannels = React.useCallback(
    (channels: Channel[]) => {
      setChannelIn(channels);
    },
    [setChannelIn]
  );

  const initChannelsRequest = React.useCallback(
    (channels: Channel[]) => {
      if (channels) {
        setChannelRequestList(channels);
      }
    },
    [setChannelRequestList]
  );

  React.useEffect(() => {
    socket?.on("InitChannelsRequest", initChannelsRequest);
    socket?.on("InitChannels", initChannels);
    socket?.on("successfullyJoinedChannel", addChannel);
    return () => {
      socket?.off("successfullyJoinedChannel", addChannel);
      socket?.off("InitChannels", initChannels);
    };
  }, [socket, addChannel, initChannels, initChannelsRequest]);

  const value = useMemo(
    () => ({
      conversationInfo,
      setConversationInfo,
      channelIn,
      leaveChannel,
      channelRequestList,
      setChannelRequestList,
    }),
    [
      conversationInfo,
      setConversationInfo,
      channelIn,
      leaveChannel,
      channelRequestList,
      setChannelRequestList,
    ]
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
  if (context.channelRequestList == undefined) {
    context.channelRequestList = [];
  }
  return context;
}
