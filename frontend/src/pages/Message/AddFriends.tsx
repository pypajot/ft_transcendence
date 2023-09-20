import { useEffect, useState } from "react";
import { useSocketContext } from "../../context/WebSocketContext";
import {
  Box,
  Button,
  Input,
  Popover,
  PopoverButton,
  PopoverContainer,
  StatusBadge,
} from "@twilio-paste/core";

export const AddFriends = () => {
  const socket = useSocketContext();
  const [target, setTarget] = useState("");
  const [error, setError] = useState<boolean>(false);

  const sendFriendsRequest = () => {
    socket?.emit("friendsRequest", target);
  };

  const handleBadFriendsRequest = () => {
    setError(true);
  };

  //Possile to handle already friends too
  useEffect(() => {
    socket?.on("badFriendsRequest", handleBadFriendsRequest);
    return () => {
      socket?.off("badFriendsRequest", handleBadFriendsRequest);
    };
  }, [socket]);

  return (
    <Box display="flex">
      <PopoverContainer baseId="NewFriends">
        <PopoverButton variant="primary">Add newFriends</PopoverButton>
        <Popover aria-label="FriendRequest" width="size30">
          <Input
            type="text"
            id={"friendsRequestId"}
            placeholder="Enter a username"
            onChange={(e) => {
              setTarget(e.target.value);
              setError(false);
            }}
          />
          {error && (
            <Box display="flex" columnGap="space40">
              <StatusBadge as="span" variant="ProcessError">
                No such username
              </StatusBadge>
            </Box>
          )}
          <Button variant="primary" onClick={sendFriendsRequest}>
            Request to be friend
          </Button>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
