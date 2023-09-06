import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import IntraLogin from './pages/Login/IntraLogin'
import Profile from './pages/Profile/Profile';
import Landing from './pages/Landing/Landing'
import { AuthProvider } from './context/AuthContext';
import Chat from './pages/Chat/Chat';
import Game from './pages/Game/Game';
import {Theme} from '@twilio-paste/core/theme';


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
			</Routes>
	  );
}

// And add it here

function App() {
  return (	
	<AuthProvider>
		<Theme.Provider theme="dark">
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Theme.Provider>
	</AuthProvider>
  );
}

export default App;
