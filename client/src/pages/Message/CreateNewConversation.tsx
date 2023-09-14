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
} from "@twilio-paste/core";
import { useEffect, useState } from "react";

const getChannelType: any = (type: string | undefined) => {
  if (type) {
    return type;
  } else {
    return "";
  }
};

export const CreateNewConversation = () => {
  const [channelType, setChannelType] = useState<string>("");

  useEffect(() => {
    setChannelType(getChannelType());
    console.log(channelType);
  }, []);

  /*
  const channelCreation = () => {
    //Checker si le channel name est pas pris
    //Checker si le channel est public ou priver
    //Checker si il y a un password ou pas

    //Cree le channel en fonction de ses infos
    //Display le channel sur la droite 

    //Reflechir a comment organiser la liste des conversations sur la gauches
*/

  return (
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
                placeholder="Enter a unused Channel Name"
              />
            </FormControl>
            <FormControl>
              <Select id="selectType" name="selectType">
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
              />
            </FormControl>
            <FormControl>
              <Button variant="primary" onClick={}>
                Create !
              </Button>
            </FormControl>
          </Form>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
