import React, { ReactEventHandler } from 'react'
import './SendButton.css'

interface SendButtonProps {
    onClick: ReactEventHandler;
}

export default function SendButton({onClick}: SendButtonProps) {

  return (
    <button type="button" className="send-button" onClick={onClick}>📨</button>
  )
}