import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  SidebarBody,
  useMenuState,
} from "@twilio-paste/core";
import React from "react";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";

type ContactElementProps = {
  content: string;
  setConversation: (user: string) => void;
};

export const ContactElement: React.FC<ContactElementProps> = ({
  content,
  setConversation,
}) => {
  const menu = useMenuState();
  return (
    <div onClick={() => setConversation(content)}>
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
          <h1 color="white">{content}</h1>
        </SidebarBody>
      </Box>
    </div>
  );
};
