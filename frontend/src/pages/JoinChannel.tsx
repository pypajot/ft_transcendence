import {
  Box,
  Button,
  Input,
  Popover,
  PopoverButton,
  PopoverContainer,
  StatusBadge,
} from "@twilio-paste/core";
import { useContext, useEffect, useState } from "react";
import { useSocketContext } from "../context/WebSocketContext";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";

interface JoinChannelProps {
  setConversation: (val: ConversationInformation) => void;
}

export const JoinChanel: React.FC<JoinChannelProps> = ({ setConversation }) => {
  const [info, setInfo] = useState("");
  const [channelName, setChannelName] = useState("");
  const [error, setError] = useState(false);
  const socket = useSocketContext();
  const joinChannel: any = () => {
    socket?.emit("JoinChannel", channelName);
    //Checker que on a bien join puis
    setConversation(channelName);
  };

  const handleBadChannelRequest = () => {
    setError(true);
  };

  useEffect(() => {
    socket?.on("badChannelRequest", handleBadChannelRequest);
    return () => {
      socket?.off("badChannelRequest", handleBadChannelRequest);
    };
  }, [socket]);

  return (
    <Box display="flex">
      <PopoverContainer baseId="joinChannel">
        <PopoverButton variant="primary">Join a Channel</PopoverButton>
        <Popover
          aria-label="FriendRequest"
          i18nDismissLabel={info}
          width="size30"
        >
          <Input
            type="text"
            id={"joinChannelId"}
            placeholder="Enter a Channel"
            onChange={(e) => {
              setChannelName(e.target.value);
              setError(false);
            }}
          />
          {error && (
            <Box display="flex" columnGap="space40">
              <StatusBadge as="span" variant="ProcessError">
                No such channel
              </StatusBadge>
            </Box>
          )}
          <Button variant="primary" onClick={joinChannel}>
            Join !
          </Button>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
