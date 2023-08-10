import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

// Model for pages, put code in a subfolder of pages, and import it here

function AppRoutes() {
	  return (
			<Routes>
				<Route path="/" element={<Home />} />
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
