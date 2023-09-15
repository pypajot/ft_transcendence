import { useState, useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import LittleMessage from "./LittleMessage";
import MessageTarget from "./MessageTarget";
import { useSocketContext } from "../../Context/socket-context";
import { ChannelComponent } from "./ChannelComponent";
import { Conversation } from "./Conversation";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  Topbar,
  useMenuState,
} from "@twilio-paste/core";
import { Contact } from "./Contact";
import Popup from "reactjs-popup";
import { TopbarMenu } from "./TopMenu";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";

//Access Username by global cookies or something ?

const ChatComponent = () => {
  const [channelTarget, setChannelTarget] = useState<string>("");
  const [messagesChan, setMessageChan] = useState<string[]>([]);
  const [contact, setContact] = useState<string>("");
  const socket = useSocketContext();

  useEffect(() => {
    socket?.emit("JoinChannel", channelTarget);
  }, [channelTarget]);

  const sendToChannel = (message: string) => {
    const eventContent: string[] = [channelTarget, message];
    socket?.emit("ChannelMessage", eventContent);
  };
  const messageChanListener = (message: string) => {
    setMessageChan([...messagesChan, message]);
  };
  useEffect(() => {}, [socket]);
  useEffect(() => {
    socket?.on("newChannelMessage", messageChanListener);
    return () => {
      socket?.off("newChannelMessage", messageChanListener);
    };
  }, [messageChanListener]);

  const menu = useMenuState();
  return (
    <>
      <TopbarMenu />
      <Messages message={messagesChan} />
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
            <div>
              <MenuButton {...menu} variant="reset" size="reset">
                <MoreIcon decorative={false} title="More options" />
              </MenuButton>
              <Menu {...menu} aria-label="Preferences">
                <MenuItem {...menu}>Block</MenuItem>
                <MenuSeparator {...menu} />
                <MenuItem {...menu}>Invite Into Channel</MenuItem>
                <MenuSeparator {...menu} />
                <MenuItem {...menu}>Invite to Play </MenuItem>
              </Menu>{" "}
              <h1>{contact}</h1>
            </div>
            <Conversation contact={contact} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ChatComponent;
