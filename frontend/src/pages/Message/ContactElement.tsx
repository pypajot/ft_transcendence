import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  SidebarBody,
  useMenuState,
} from "@twilio-paste/core";
import React, { useEffect } from "react";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";
import { ContactType } from "../../../public/Types/contact.entity";

type ContactElementProps = {
  content: ContactType;
  setConversation: (user: ConversationInformation) => void;
};

export const ContactElement: React.FC<ContactElementProps> = ({
  content,
  setConversation,
}) => {
  const handleContact = (content: ContactType) => {
    const conversationInfo: ConversationInformation = {
      ischannel: content.channel,
      isUser: content.user,
      name: content.name,
    };

    setConversation(conversationInfo);
  };

  return (
    <div onClick={() => handleContact(content)}>
      <Box
        borderStyle="solid"
        borderWidth="borderWidth0"
        borderTopWidth="borderWidth10"
        borderColor="colorBorderWeak"
        display="flex"
        flexDirection="row"
        columnGap="space30"
        paddingX="space70"
        paddingTop="space50"
      >
        <SidebarBody>
          <h1 color="white">{content.name}</h1>
        </SidebarBody>
      </Box>
    </div>
  );
};
