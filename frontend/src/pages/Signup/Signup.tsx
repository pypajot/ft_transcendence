import { useAuth } from '../../context/AuthContext';
import './Signup.css';

const Signup = () => {

	const { setAccessToken } = useAuth();

	async function HandleSubmit(e: any)
	{
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		const formBody = {
				"username": formData.get('username'),
				"password": formData.get('password')
		}
		const body = JSON.stringify(formBody);
		const response = await fetch('http://localhost:3333/auth/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: body,
			credentials: 'include',
		});
		if (response.status !== 201)
			return ;
		sessionStorage.setItem('access_token', (await response.json()).access_token);
		setAccessToken(sessionStorage.getItem('access_token'));
	}

	return (
		<>
			<div>
				<h1>Signup Form</h1>
			</div>
			<div>
				<form onSubmit={HandleSubmit}>
					<div>
						<label>
							Username: <input type="text" name="username" />
						</label>
					</div>
					<div>
						<label>
							Password: <input type="password" name="password" />
						</label>
					</div>
					<div>
						<button type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};


export default Signup;