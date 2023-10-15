import { useEffect } from 'react';
import './Login.css';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';

function IntraLogin() {

	const [searchParams] = useSearchParams();
	const { setAccessToken } = useAuth();
	const navigate = useNavigate();
	const run = useRef(0);

	useEffect(() => {
		const HandleIntra = async () => {
			if (searchParams.get("error") || !searchParams.get("code"))
			{
				navigate("/landing");
				return ;
			}
			const response = await fetch("http://localhost:3333/api/auth/intralogin", {
				method: "POST",
				headers: { "Content-type" : "application/json" },
				body: JSON.stringify({ "code": searchParams.get("code")}),
				credentials: 'include',
			})
			if (response.status !== 201) {
				navigate("/")
				return ;
			}
			const responseJson = await response.json();
			if (responseJson.user2fa) {
				sessionStorage.setItem('2faToken', responseJson.access_token);
				navigate('/login2fa');
			}
			else {
				sessionStorage.setItem('access_token', responseJson.access_token);
				setAccessToken(sessionStorage.getItem('access_token'));
			}
			return ;
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