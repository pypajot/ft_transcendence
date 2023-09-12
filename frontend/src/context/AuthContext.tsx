import { access } from 'fs';
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
	refreshFetch: (address: any, params?: any) => any;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	
	const [user, setUser] = useState<User | null>(null);
	const [accessToken, setAccessToken] = useState<string | null>(null);

	useEffect(() => {
		const token = sessionStorage.getItem('access_token');
		if (token)
			setAccessToken(token);
	}, [])

	useEffect(() => {
		if (!accessToken)
			return ;
		refreshFetch('http://localhost:3333/user/me', {
			headers: { 'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
		})
		.then((response) => response.json())
		.then((response) => setUser(response));
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
			sessionStorage.removeItem("access_token");
			setAccessToken("");
			return response;
		}
		const token = (await response.json()).access_token;
		console.log("refresh", token);
		sessionStorage.setItem("access_token", token);
		params.headers.Authorization = `Bearer ${token}`;
		response = await fetch(address, params);
		return response;
	}

	const logout = async () => {
		console.log("logout", accessToken)
		refreshFetch('http://localhost:3333/auth/logout', {
			method: 'POST',
			headers: { 'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
			credentials: 'include',
		});
		setUser(null);
		setAccessToken("");
		sessionStorage.removeItem("access_token");
	}

	return (
		<AuthContext.Provider value={{ user, setUser, logout, accessToken, setAccessToken, refreshFetch }}>
			{children}
		</AuthContext.Provider>
	);
};

