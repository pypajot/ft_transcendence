import axios, { AxiosError } from "axios";

declare module 'axios' {
	export interface AxiosRequestConfig {
		retry?: boolean;
	}
}

export const refreshFetch = axios.create({
	baseURL : "/",
});

refreshFetch.interceptors.request.use(
	(config) => {
		const accessToken = sessionStorage.getItem('access_token');
		if ( accessToken ) {
			config.headers["Authorization"] = `Bearer ${accessToken}`;

		}
		config.withCredentials = true;
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
		if ( error.response?.status !== 401 || error.response?.config.retry == true || !originalRequest )
			return Promise.reject(error);

		const response = await fetch("http://localhost:3333/auth/refresh", {
			method: "GET",
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});
		if (response.status !== 201)
			return Promise.reject(error); //disconnect

		sessionStorage.setItem('access_token', (await response.json()).access_token);
		originalRequest.retry = true;
		const accessToken = sessionStorage.getItem('access_token');
		originalRequest.headers.Authorization = `Bearer ${accessToken}`
		return refreshFetch(originalRequest);
	}
);
