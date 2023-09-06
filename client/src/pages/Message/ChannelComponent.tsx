import { Box, Button, Input, Label } from '@twilio-paste/core'
import { useState } from 'react';

type ChannelComponentProps = {
    setChannel: (value: string) => void;
    sendToChannel: (message: string) =>void;
}

export const ChannelComponent: React.FC<ChannelComponentProps> = ({setChannel, sendToChannel}) =>
    {
        const [channelname, setChannelname] = useState<string>("");
        const [message, setMessage] = useState<string>("");
  return (
        <>
        <Box marginBottom="space80">
            <Label htmlFor="ChannelName">Channel Name</Label>
            <Input id="channel_name" name="channel" type="text" placeholder="Example" onChange={(e)=>{setChannelname(e.target.value)}} />
            <Button variant="primary" onClick={() => setChannel(channelname)}>
              Confirm
            </Button>
        </Box>
        <Box>
            <Label htmlFor="Message">Message</Label>
            <Input id="message_id" name="Content" type="text" placeholder="Hello :)" onChange={(e)=>{setMessage(e.target.value)}} />
        <Button variant="primary" onClick={() => sendToChannel(message)}>
            Send
        </Button>
        </Box>
        </>
  )
}

