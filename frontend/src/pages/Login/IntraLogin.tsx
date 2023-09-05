import { useContext, useEffect, useState } from 'react';
import './Login.css';
import { useSearchParams } from 'react-router-dom';
import { AuthContext, useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function IntraLogin() {

	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		const HandleIntra = async () => {
			if (searchParams.get("error") || !searchParams.get("code"))
				navigate("/landing");
			const response = await fetch("/auth/intralogin", {
				method: "POST",
				headers: { "Content-type" : "application/json" },
				body: searchParams.get("code"),
			})
			if (response.status == 201)
				navigate("/profile");
			navigate("/landing");
		};
		HandleIntra();
	}, []);
	return (
		<>	
		</>
	);
};

export default IntraLogin;