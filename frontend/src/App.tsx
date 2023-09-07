// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import IntraLogin from './pages/Login/IntraLogin'
import Profile from './pages/Profile/Profile';
import Landing from './pages/Landing/Landing'
import Chat from './pages/Chat/Chat';
import Game from './pages/Game/Game';
import ModeSelection from './pages/Game/modeSelection';
import { AuthProvider } from './context/AuthContext';
import WebSocketProvider from './context/WebSocketContext';

// Model for pages, put code in a subfolder of pages, and import it here

function AppRoutes() {
	  return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/landing" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/intralogin" element={<IntraLogin />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/home" element={<Home />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/game" element={<Game />} />
				<Route path="/selectmode" element={<ModeSelection />} />
			</Routes>
	  );
}

// And add it here

function App() {
  return (	
	<AuthProvider>
		<WebSocketProvider>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</WebSocketProvider>
	</AuthProvider>
  );
}

export default App;
