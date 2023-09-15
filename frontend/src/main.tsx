import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@twilio-paste/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
	<Theme.Provider theme="default">
       <App />
	  </Theme.Provider>
  </React.StrictMode>,
)