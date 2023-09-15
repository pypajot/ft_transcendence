import React, { useState } from 'react'
import { Button, TextField } from "@mui/material"
import postSignup from './Hooks/PostSignup';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [emailErrored, setEmailErrored] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordErrored, setPasswordErrored] = useState(false);

    const handleSignup = async () => {
      if (!username) {
        setEmailErrored(true);
      } else {
        setEmailErrored(false);
      }
      if (!password) {
        setPasswordErrored(true);
      } else {
        setPasswordErrored(false);
      }
     postSignup({username, password});
    };
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
        <h1 className="text-6xl">Transcendence</h1>
        <div className="flex flex-col gap-2">
          <TextField
            label="Username"
            className="w-80"
            type="text"
            required
            helperText={emailErrored && "Please enter a valid Email."}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            error={emailErrored}
          />
          <TextField
            label="Password"
            type="password"
            className="w-80"
            required
            helperText={passwordErrored && "Password may not be empty."}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={passwordErrored}
          />
        </div>
        <Button variant="contained" className="w-80" onClick={handleSignup}>
          <span className="p-1">Sign Up</span>
        </Button>
      </div>
  )
}
