import { useContext, useEffect, useState } from 'react';
import './Login.css';
import { useSearchParams } from 'react-router-dom';
import { AuthContext, useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function IntraLogin() {

	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const run = useRef(0);

	useEffect(() => {
		const HandleIntra = async () => {
			if (searchParams.get("error"))
			{
				navigate("/landing");
				return ;
			}
			const response = await fetch("/auth/intralogin", {
				method: "POST",
				headers: { "Content-type" : "application/json" },
				body: JSON.stringify({ "code": searchParams.get("code")}),
				credentials: 'include',
			})
			if (response.status === 201)
			{
				// const data = await response.json();
				sessionStorage.setItem('access_token', (await response.json()).access_token)
				navigate("/profile");
				return ;
			}
			navigate("/landing");
		};
		if (run.current !== 0)
			HandleIntra();
		run.current++;
	}, []);
	return (
		<>	
		</>
	);
};

export default IntraLogin;