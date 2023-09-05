import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@twilio-paste/theme';
import ChatSocketContextProvider from './pages/Message/ChatSocketProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
	<Theme.Provider theme="default">
    <ChatSocketContextProvider>
       <App />
    </ChatSocketContextProvider>
	  </Theme.Provider>
  </React.StrictMode>,
)