import {
  Box,
  Button,
  Input,
  Popover,
  PopoverButton,
  PopoverContainer,
  StatusBadge,
  usePopoverState,
} from "@twilio-paste/core";
import { useContext, useEffect, useState } from "react";
import { useSocketContext } from "../../context/WebSocketContext";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";
import ChatContextProvider, { useChatContext } from "../../context/ChatContext";

interface error {
  wrongName: boolean;
  wrongPriv: boolean;
  wrongPassword: boolean;
}

export const JoinChanel = () => {
  const [password, setPassword] = useState("");
  const [channelName, setChannelName] = useState("");
  const [requestPassword, setReqPassword] = useState(false);
  const [error, setError] = useState<error>({
    wrongName: false,
    wrongPriv: false,
    wrongPassword: false,
  });
  const socket = useSocketContext();
  const chatContext = useChatContext();

  const joinChannel: any = () => {
    socket?.emit("JoinChannel", { name: channelName, pass: password });
    //Checker que on a bien join puis
    // setConversation(channelName);
  };

  const handleWrongName = () => {
    setError({
      wrongName: true,
      wrongPriv: error.wrongPriv,
      wrongPassword: error.wrongPassword,
    });
  };

  const handleWrongPrivileges = () => {
    setError({
      wrongName: error.wrongName,
      wrongPriv: true,
      wrongPassword: error.wrongPassword,
    });
  };

  const handleWrongPassword = () => {
    setError({
      wrongName: error.wrongName,
      wrongPriv: error.wrongPriv,
      wrongPassword: true,
    });
  };
  const handleReqPassword = () => {
    setReqPassword(true);
    setError({
      wrongName: false,
      wrongPriv: false,
      wrongPassword: false,
    });
  };
  const enterConversation = (arg: any) => {
    const convInfo: ConversationInformation = {
      ischannel: true,
      isUser: false,
      name: arg.name,
    };
    chatContext.setConversationInfo(convInfo);
  };

  useEffect(() => {
    socket?.on("wrongName", handleWrongName);
    socket?.on("wrongPrivileges", handleWrongPrivileges);
    socket?.on("wrongPassword", handleWrongPassword);
    socket?.on("requestPassword", handleReqPassword);
    socket?.on("successfullyJoinedChannel", enterConversation);
    return () => {
      socket?.off("wrongName", handleWrongName);
      socket?.off("wrongPrivileges", handleWrongPrivileges);
      socket?.off("wrongPassword", handleWrongPassword);
      socket?.off("requestPassword", handleReqPassword);
      socket?.off("successfullyJoinedChannel", enterConversation);
    };
  }, [socket]);

  const errorName = error.wrongName && !error.wrongPriv;
  const errorPriv = !error.wrongName && error.wrongPriv;

  return (
    <Box display="flex">
      <PopoverContainer baseId="joinChannel">
        <PopoverButton variant="primary">Join a Channel</PopoverButton>
        <Popover aria-label="FriendRequest" width="size30">
          <Input
            type="text"
            id={"joinChannelId"}
            placeholder="Enter a Channel"
            onChange={(e) => {
              setChannelName(e.target.value);
              setError({
                wrongName: false,
                wrongPassword: error.wrongPassword,
                wrongPriv: false,
              });
              setReqPassword(false);
              setPassword("");
            }}
          />
          {errorName && (
            <Box display="flex" columnGap="space40">
              <StatusBadge as="span" variant="ProcessError">
                No such channel
              </StatusBadge>
            </Box>
          )}
          {errorPriv && (
            <Box display="flex" columnGap="space40">
              <StatusBadge as="span" variant="ProcessError">
                This channel is private
              </StatusBadge>
            </Box>
          )}
          {requestPassword && (
            <>
              <Input
                type="password"
                id={"PasswordFieldId"}
                placeholder="Enter a Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError({
                    wrongName: error.wrongName,
                    wrongPassword: false,
                    wrongPriv: error.wrongPriv,
                  });
                }}
              />
              {error.wrongPassword && (
                <Box display="flex" columnGap="space40">
                  <StatusBadge as="span" variant="ProcessError">
                    Wrong Password
                  </StatusBadge>
                </Box>
              )}
            </>
          )}
          <Button variant="primary" onClick={joinChannel}>
            Join !
          </Button>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
