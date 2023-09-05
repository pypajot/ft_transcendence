import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ChatComponent from './pages/Message/ChatPage';
import Test from './pages/Test/Test';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import { ThemeProvider } from '@emotion/react';

// Model for pages, put code in a subfolder of pages, and import it here

function AppRoutes() {
	  return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/chatapp" element={<ChatComponent />} />
				<Route path="/test" element={<Test />} />
			</Routes>
	  );
}

// And add it here

function App() {
  return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>

  );
}

export default App;
