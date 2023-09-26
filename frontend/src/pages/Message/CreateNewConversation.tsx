import {
  Box,
  Button,
  Form,
  FormControl,
  Heading,
  Input,
  Label,
  Option,
  Popover,
  PopoverButton,
  PopoverContainer,
  Select,
  StatusBadge,
} from "@twilio-paste/core";
import { useEffect, useState } from "react";
import { useSocketContext } from "../../context/WebSocketContext";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";

const getChannelType: any = (type: string | undefined) => {
  if (type) {
    return type;
  } else {
    return "";
  }
};

interface CreateNewConversationProps {
  setConversation: (val: ConversationInformation) => void;
}

export const CreateNewConversation: React.FC<CreateNewConversationProps> = ({
  setConversation,
}) => {
  const [channelType, setChannelType] = useState("Public");
  const [_public, setPublic] = useState(true);
  const [channelName, setChannelName] = useState("");
  const [channelPassword, setchannelPassword] = useState("");
  const [errorChannelName, setErrorChannelName] = useState(false);
  const {socket} = useSocketContext();

  useEffect(() => {
    if (_public) {
      setChannelType("Public");
    } else {
      setChannelType("Private");
    }
  }, [_public]);

  const nameTaken = () => {
    setErrorChannelName(true);
  };

  useEffect(() => {
    socket?.on("channelNameTaken", nameTaken);
    return () => {
      socket?.off("channelNameTaken", nameTaken);
    };
  }, [nameTaken]);

  const channelCreation = () => {
    socket?.emit("ChannelCreation", {
      type: channelType,
      name: channelName,
      pwd: channelPassword,
    });
    if (errorChannelName) {
      return (
        <div>
          <h1>Channel Name Already Taken</h1>
        </div>
      );
    }
    const conversationInfo = {
      ischannel: true,
      isUser: false,
      name: channelName,
    };
    console.log("new");
    setConversation(conversationInfo);
  };
  const handleSelectChange = () => {
    if (_public) {
      setPublic(false);
    } else {
      setPublic(true);
    }
  };

  //Checker si le channel name est pas pris
  //Checker si le channel est public ou priver
  //Checker si il y a un password ou pas

  //Cree le channel en fonction de ses infos
  //Display le channel sur la droite

  //Reflechir a comment organiser la liste des conversations sur la gauches

  return (
    <>
      <Box display="flex">
        <PopoverContainer baseId="NewConversation">
          <PopoverButton variant="primary">
            Invite Friends to Discuss !
          </PopoverButton>
          <Popover aria-label="CreateChannel" width="size40">
            <Form>
              <Heading as="h3" id={"CreateChannel"} variant={"heading30"}>
                Create new Channel
              </Heading>
              <FormControl>
                <Label>ChannelName</Label>
                <Input
                  type="text"
                  id={"channelInputId"}
                  placeholder="Enter Channel Name"
                  onChange={(e) => {
                    setChannelName(e.target.value);
                    setErrorChannelName(false);
                  }}
                />
                {errorChannelName && (
                  <Box display="flex" columnGap="space40">
                    <StatusBadge as="span" variant="ProcessError">
                      Channel Name Already Taken
                    </StatusBadge>
                  </Box>
                )}
              </FormControl>
              <FormControl>
                <Select
                  id="selectType"
                  name="selectType"
                  onChange={handleSelectChange}
                >
                  <Option value="Public">Public</Option>
                  <Option value="Private">Private</Option>
                </Select>
              </FormControl>
              <FormControl>
                <Label>Password (Optional)</Label>
                <Input
                  type="password"
                  id={"channelPassword"}
                  placeholder="Enter a Channel Password"
                  onChange={(e) => {
                    setchannelPassword(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <Button variant="primary" onClick={channelCreation}>
                  Create !
                </Button>
              </FormControl>
            </Form>
          </Popover>
        </PopoverContainer>
      </Box>
    </>
  );
};
