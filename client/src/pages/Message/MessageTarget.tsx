import React, { useState } from 'react'


export default function MessageTarget({target}:
{
 target: (value: string) => void;
}) {
    const [content, setContent] = useState("");
  return (
    <>
        <input
        onChange={(e) => setContent(e.target.value)}>
        </input>
        <button onClick={() => target(content)}>
            Confirm !
        </button>
    </>
  )
}
