import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './Router/router';
import WebSocketProvider from './context/WebSocketContext';

// Model for pages, put code in a subfolder of pages, and import it here

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
