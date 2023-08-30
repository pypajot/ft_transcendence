import React from 'react'
import { Message } from '../../../public/Types/message.entity'

export default function Messages({message}: {message: Message[]}) {
  return <div>{
        message.map((message, index) =>
        <div key={index}>{message.message} </div>
        )
  }</div>
}
