import axios, { AxiosError } from "axios";
import { useAuth } from "../context/AuthContext";
import { access } from "fs";

export const refreshFetch = axios.create({
	baseURL : "/",
});

refreshFetch.interceptors.request.use(
	(config) => {
		const { accessToken } = useAuth();
		if ( accessToken ) {
			config.headers["Authorization"] = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

refreshFetch.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error: AxiosError) => {
		const originalRequest = error.config;
		if ( error.response && error.response.status === 401 && error.response.data === "Access token expired" && originalRequest ) {
			const { accessToken, setAccessToken } = useAuth();
			const response = await fetch("/auth/refresh", {
				method: "POST",
				credentials: "include",
			});
			const data = await response.json();
			setAccessToken(data.accessToken);
			refreshFetch.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
			return refreshFetch(originalRequest);
		}
		return Promise.reject(error);
	}
);
