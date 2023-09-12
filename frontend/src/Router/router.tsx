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
	const { accessToken } = useAuth();
	return (
		  <Routes>
			  <Route path="/" element={accessToken ? <Navigate to='/home' /> : <Landing />} />
			  <Route path="/signup" element={accessToken ? <Navigate to='/home' /> : <Signup />} />
			  <Route path="/landing" element={accessToken ? <Navigate to='/home' /> : <Landing />} />
			  <Route path="/login" element={accessToken ? <Navigate to='/home' /> : <Login />} />
			  <Route path="/intralogin" element={accessToken ? <Navigate to='/home' /> : <IntraLogin />} />
			  <Route path="/profile" element={accessToken ? <Profile /> : <Navigate to='/landing' />} />
			  <Route path="/home" element={accessToken ? <Home /> : <Navigate to='/landing' />} />
			  <Route path="/chat" element={accessToken ? <Chat /> : <Navigate to='/landing' />} />
			  <Route path="/game" element={accessToken ? <Game /> : <Navigate to='/landing' />} />
			  <Route path="/selectmode" element={accessToken ? <ModeSelection /> : <Navigate to='/landing' />} />
		  </Routes>
	);
}

export default AppRoutes