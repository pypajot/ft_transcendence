import * as React from "react";
import { ConversationInformation } from "../../public/Types/conversationInformation.entity";
import { createContext, useContext, useMemo, useState } from "react";

type ChatContext = {
  conversationInfo: ConversationInformation | undefined;
  setConversationInfo: (
    coversationInfo: ConversationInformation | undefined
  ) => void;
};

type ChatContextProviderProps = {
  children: React.ReactNode;
};
export const ChatContext = createContext<ChatContext | undefined>(undefined);

export default function ChatContextProvider(props: ChatContextProviderProps) {
  const [conversationInfo, setConversationInfo] = useState<
    ConversationInformation | undefined
  >(undefined);

  const value = useMemo(
    () => ({
      conversationInfo,
      setConversationInfo,
    }),
    [conversationInfo, setConversationInfo]
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
