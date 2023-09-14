import {
  Box,
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
  }, []);

  //UseEffec

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
          </Form>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
