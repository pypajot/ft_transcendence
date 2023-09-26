import { createContext, useState, useContext, useMemo } from "react";
import * as React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSocketContext } from "./WebSocketContext";
import { Socket } from 'socket.io-client';

export const useAuth = () => useContext(AuthContext);

export interface User {
	id: number
	username: string
	avatar: string
	socketId?: string
	twoFactorAuthActive: boolean
	friends: {id: number, username: string}[]
	friendRequests: {id: number, username: string}[]
	blocked: number[]

}

export interface AuthContextData {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
  refreshFetch: (address: any, params?: any) => any;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(
    sessionStorage.getItem("access_token")
  );
  const run = useRef(false);

  // useEffect(() => {
  // 	const token = sessionStorage.getItem('access_token');
  // 	if (token)
  // 		setAccessToken(token);
  // }, [])

  useEffect(() => {
    const getCurrentUser = async () => {
      const response = await refreshFetch("http://localhost:3333/user/me", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      });
      if (response.status !== 200) return;
      setUser(await response.json());
    };
    if (!accessToken) return;
    if (run.current === false) getCurrentUser();
    run.current = true;
  }, [accessToken]);

	const refreshFetch = async (address: any, params?: any) => {
		let response = await fetch(address, params);
		if (response.status !== 401)
			return response;
		response = await fetch('http://localhost:3333/auth/refresh', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});
		if (response.status !== 200 && response.status !== 201)
		{
			setUser(null);
			setAccessToken(null);
			sessionStorage.removeItem("access_token");
			run.current = false;
			return response;
		}
		const token = (await response.json()).access_token;
		sessionStorage.setItem("access_token", token);
		params.headers.Authorization = `Bearer ${token}`;
		response = await fetch(address, params);
		return response;
	}

	const logout = async () => {
		try {
			await refreshFetch('http://localhost:3333/auth/logout', {
				method: 'POST',
				headers: { 'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
				credentials: 'include',
			});
		} catch {
			console.log("error")
		}
		setUser(null);
		setAccessToken(null);
		sessionStorage.removeItem("access_token");
		run.current = false;
	}

  const value = useMemo (
    () => ({
      user,
      setUser,
      accessToken,
      setAccessToken,
      logout,
      refreshFetch,
    }),
    [user, setUser, accessToken, setAccessToken, logout, refreshFetch]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
