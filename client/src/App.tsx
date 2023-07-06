
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.msg));
  }, []);
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App