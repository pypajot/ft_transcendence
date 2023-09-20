import { useState, useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import LittleMessage from "./LittleMessage";
import MessageTarget from "./MessageTarget";
import { ChannelComponent } from "./ChannelComponent";
import { Conversation } from "./Conversation";
import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  Popover,
  PopoverButton,
  PopoverContainer,
  StatusBadge,
  useMenuState,
} from "@twilio-paste/core";
import { Contact } from "./Contact";
import { TopbarMenu } from "./TopMenu";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { useSocketContext } from "../../context/WebSocketContext";
import { ConversationInformation } from "../../../public/Types/message.entity";

const ChatComponent = () => {
  const [contact, setContact] = useState<ConversationInformation>();

  return (
    <>
      <TopbarMenu setConversation={setContact} />
      <Flex>
        <Flex>
          <Box
            backgroundColor="colorBackgroundDecorativWeakest"
            padding="space40"
            width="100%"
          >
            <Contact setConversation={setContact} />
          </Box>
        </Flex>
        <Flex grow>
          <Box
            backgroundColor="colorBackgroundDecorativWeakest"
            padding="space40"
            width="100%"
          >
            <Conversation info={contact} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ChatComponent;
