import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@twilio-paste/theme';
import ChatSocketContextProvider from './pages/Message/ChatSocketProvider.tsx';
import SocketContextProvider from './Context/socket-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
	<Theme.Provider theme="default">
    <SocketContextProvider>
       <App />
    </SocketContextProvider>
	  </Theme.Provider>
  </React.StrictMode>,
)