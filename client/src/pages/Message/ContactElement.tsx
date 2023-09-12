import { Box, SidebarBody } from '@twilio-paste/core'
import React from 'react'

type ContactElementProps = {
    content: string;
    setConversation: (user: string) => void;
}

export const ContactElement: React.FC<ContactElementProps> = ({content, setConversation}) => 
 {

  return (
    <div onClick={() => setConversation(content)}>
    <Box  borderStyle="solid"
          borderWidth="borderWidth0"
          borderTopWidth="borderWidth10"
          borderColor="colorBorderWeak"
          display="flex"
          flexDirection="row"
          columnGap="space30"
          paddingX="space70"
          paddingTop="space50" >
        <SidebarBody >
            <h1 color='white'>{content}</h1>
        </SidebarBody>
    </Box>
    </div>
  )
}
