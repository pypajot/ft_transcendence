import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import IntraLogin from "../pages/Login/IntraLogin";
import Profile from "../pages/Profile/Profile";
import Chat from "../pages/Chat/Chat";
import Game from "../pages/Game/Game";
import ModeSelection from "../pages/Game/modeSelection";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AppRoutes() {
	const { user } = useAuth();
	return (
		  <Routes>
			  <Route path="/" element={user ? <Navigate to='/home' /> : <Landing />} />
			  <Route path="/signup" element={user ? <Navigate to='/home' /> : <Signup />} />
			  <Route path="/landing" element={user ? <Navigate to='/home' /> : <Landing />} />
			  <Route path="/login" element={user ? <Navigate to='/home' /> : <Login />} />
			  <Route path="/intralogin" element={user ? <Navigate to='/home' /> : <IntraLogin />} />
			  <Route path="/profile" element={user ? <Profile /> : <Navigate to='/landing' />} />
			  <Route path="/home" element={user ? <Home /> : <Navigate to='/landing' />} />
			  <Route path="/chat" element={user ? <Chat /> : <Navigate to='/landing' />} />
			  <Route path="/game" element={user ? <Game /> : <Navigate to='/landing' />} />
			  <Route path="/selectmode" element={user ? <ModeSelection /> : <Navigate to='/landing' />} />
		  </Routes>
	);
}

export default AppRoutes