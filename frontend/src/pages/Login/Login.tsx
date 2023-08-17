import { useEffect, useState } from 'react';
import './Login.css';

const Login = () => {

	// const [user, setUser] = useState<UserDTO>();


	// useEffect(() => {
	// 	async function FetchUser() {
	// 		const response = await UserAPI.getUser();
	// 		console.log(response);
	// 		setUser(response);
	// 	}

	// 	FetchUser();
	// }, []);

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
		await fetch('/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formBody),
		})
		.then(response => response.json())
		.then(response => alert(JSON.stringify(response)));
	}

	return (
		<>
			<div>
				<h1>Login Form</h1>
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
							Password: <input type="text" name="password" />
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


export default Login;