import { ChatComposer } from '@twilio-paste/chat-composer'
import React, { useRef } from 'react'
import { useState } from 'react'

export default function MessageInput({ send }:
    {
        send: (val: string) => void
    }) {
    const [value, setValue] = useState("")

  return (
    <>
        <input
          placeholder="Type your message ..."
          onChange={(e) => {setValue(e.target.value)}}
          value={value}/>
        <button onClick={() => send(value)}>Send a message</button>
    </>
  )
}
