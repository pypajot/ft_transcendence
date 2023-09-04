import { createContext, useState, useContext } from 'react';
import * as React from 'react';


export const useAuth = () => useContext(AuthContext);

export interface AuthContextData {
	accessToken: string | null;
	setAccessToken: (token: string | null) => void;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	
	const [accessToken, setAccessToken] = useState<string | null>(null);
	
	return (
		<AuthContext.Provider value={{ accessToken, setAccessToken }}>
			{children}
		</AuthContext.Provider>
	);
};

