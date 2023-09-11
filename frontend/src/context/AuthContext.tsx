import { createContext, useState, useContext } from 'react';
import * as React from 'react';
import { useEffect } from 'react';

export const useAuth = () => useContext(AuthContext);

export interface User {
	username: string
}

export interface AuthContextData {
	user: User | null;
	setUser: (user: User | null) => void;
	accessToken: string | null;
	setAccessToken: (token: string | null) => void;
	logout: () => void;
	refreshFetch: (request: any) => any;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	
	const [user, setUser] = useState<User | null>(null);
	const [accessToken, setAccessToken] = useState<string | null>(null);

	useEffect(() => {
		// if (!accessToken)
		// 	return ;
		refreshFetch('http://localhost:3333/user/me', {
			headers: { 'Authorization': `Bearer ${accessToken}` },
		})
		.then(response => response.json())
		.then(response => setUser(response))
	}, [accessToken])


	const refreshFetch = async (address: any, params?: any) => {
		let response = await fetch(address, params);
		if (response.status === 200)
			return response;
		response = await fetch('http://localhost:3333/auth/refresh', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});
		if (response.status !== 200)
		{
			setUser(null);
			setAccessToken(null);
			return response;
		}
		const token = (await response.json()).access_token;
		console.log(token);
		setAccessToken(token);
		params.headers.Authorization = `Bearer ${accessToken}`;
		response = await fetch(address, params);
		return response;
	}

	const logout = async () => {
		console.log(accessToken)
		refreshFetch('http://localhost:3333/auth/logout', {
			method: 'POST',
			headers: { 'Authorization': `Bearer ${accessToken}` },
		});
		setUser(null);
		setAccessToken(null);
	}

	return (
		<AuthContext.Provider value={{ user, setUser, logout, accessToken, setAccessToken, refreshFetch }}>
			{children}
		</AuthContext.Provider>
	);
};

