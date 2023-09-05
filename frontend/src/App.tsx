import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import IntraLogin from './pages/Login/IntraLogin'
import Profile from './pages/Profile/Profile';
import Landing from './pages/Landing/Landing'
import { AuthProvider } from './context/AuthContext';

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
			</Routes>
	  );
}

// And add it here

function App() {
  return (	
	<AuthProvider>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</AuthProvider>
  );
}

export default App;
