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
		if ( error.response && error.response.status === 401 && error.response.config.retry == false && originalRequest ) {
			await fetch("http://localhost:3333/auth/refresh", {
				method: "GET",
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
			})
			.then(response => response.json())
			.then(response => sessionStorage.setItem('access_token', response.access_token));
			originalRequest.retry = true;
			const accessToken = sessionStorage.getItem('access_token');
			originalRequest.headers.Authorization = `Bearer ${accessToken}`
			return refreshFetch(originalRequest);
		}
		return Promise.reject(error);
	}
);
