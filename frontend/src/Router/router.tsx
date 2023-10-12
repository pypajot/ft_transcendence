import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Signup from '../pages/Signup/Signup';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';
import IntraLogin from '../pages/Login/IntraLogin';
import Profile from '../pages/Profile/Profile';
import Game from '../pages/Game/Game';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ChatComponent from '../pages/Message/ChatPage';
import Login2fa from '../pages/Login/Login2fa';
import Friends from '../pages/Friends/Friends';
import NotFound from '../pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useSocketContext } from '../context/WebSocketContext';

function AppRoutes() {
  const { accessToken } = useAuth();
  const location = useLocation();
  const {socket} = useSocketContext();

  useEffect(() => {
    //if the user comes from the chat invite, we send a boolean to the server
    
    if (!location?.state) {
      console.log('location: ', location );
      socket?.emit('locationChange', location);
    }
  }, [location]);

  return (
    <Routes >
    <Route
      path="/"
      element={accessToken ? <Navigate to="/home" /> : <Landing />}
    />
    <Route
      path="/signup"
      element={accessToken ? <Navigate to="/home" /> : <Signup />}
    />
    <Route
      path="/landing"
      element={accessToken ? <Navigate to="/home" /> : <Landing />}
    />
    <Route
      path="/login"
      element={accessToken ? <Navigate to="/home" /> : <Login />}
    />
    <Route
      path="/intralogin"
      element={accessToken ? <Navigate to="/home" /> : <IntraLogin />}
    />
    <Route
      path="/login2fa"
      element={accessToken ? <Navigate to="/home" /> : <Login2fa />}
    />
    <Route
      path="/profile"
      element={accessToken ? <Profile /> : <Navigate to="/landing" />}
    />
    <Route
      path="/home"
      element={accessToken ? <Home /> : <Navigate to="/landing" />}
    />
    <Route
      path="/friends"
      element={accessToken ? <Friends /> : <Navigate to="/landing" />}
    />
    <Route
      path="/game"
      element={accessToken ? <Game /> : <Navigate to="/landing" />}
    />
    <Route
      path="/chatapp"
      element={accessToken ? <ChatComponent /> : <Navigate to="/landing" />}
    />
    <Route
      path="*"
      element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;
