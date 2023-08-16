import { useEffect, useState } from 'react';
import { UserAPI } from './api/UserAPI';
import { UserDTO } from './api/dto/user.dto';
import './Signup.css';

const Signup = () => {

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
		alert(JSON.stringify(formBody));
		await fetch('/auth/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formBody),
		})
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


export default Signup;