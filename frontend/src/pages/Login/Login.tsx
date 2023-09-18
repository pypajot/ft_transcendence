import './Login.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {

	const { setAccessToken } = useAuth();
	const navigate = useNavigate();

	async function HandleSubmit(e: any)
	{
		e.preventDefault();

		
		const form = e.target;
		const formData = new FormData(form);
		const formBody = {
				"username": formData.get('username'),
				"password": formData.get('password')
		}
		// alert(JSON.stringify(formBody));
		const response = await fetch('http://localhost:3333/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formBody),
			credentials: 'include',
		});
		if (response.status !== 201)
			return ;
		const responseJson = await response.json();
		if (responseJson.user2fa) {
			sessionStorage.setItem('2faToken', responseJson.access_token);
			navigate('/login2fa');
		}
		else {
			sessionStorage.setItem('access_token', responseJson.access_token);
			setAccessToken(sessionStorage.getItem('access_token'));
		}
		// .then(response => response.json())
		// .then(response => sessionStorage.setItem("access_token",response.access_token))
	}

	return (
		<>
			<div className='login-form'>
				<a><img src="https://i.imgur.com/ca0eJ1A.png"/></a>
			</div>
			<div>
				<form onSubmit={HandleSubmit}>
					<div>
						<div className='username'>
							<label>
								<input type="text" name="username" className='user-input' placeholder="username"/>
							</label>
						</div>
						<div>
							<label>
								<input type="password" name="password" className='user-input' placeholder="password"/>
							</label>
						</div>
					</div>
					<div className='submit'>
						<button type="submit" className="submit-button">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className='register'>
				Don't have an account ?
			</div>
			<Link to='/signup'>
				<button className='register-button'>
					Register here
				</button>
			</Link>
		</>
	);
};


export default Login;