import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Theme} from '@twilio-paste/core/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme.Provider theme="dark">
       <App />
	  </Theme.Provider>
  </React.StrictMode>,
)