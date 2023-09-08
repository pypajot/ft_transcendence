import { createContext, useState, useContext } from 'react';
import * as React from 'react';
import { useEffect } from 'react';
import { refreshFetch } from '../fetch/refreshFetch';


export const useAuth = () => useContext(AuthContext);

export interface User {
	id: number
}

export interface AuthContextData {
	user: number | null;
	setUser: (user: number | null) => void;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	
	const [user, setUser] = useState<number | null>(null);

	useEffect(() => {
		const token = sessionStorage.getItem('access_token');
		if (!token)
			return ;
		refreshFetch.get("http://localhost:3333/user/me");

	}, [])
	
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

