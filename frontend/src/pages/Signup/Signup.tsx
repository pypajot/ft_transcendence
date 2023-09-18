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
			<div className='signup-form'>
				<a><img src="https://i.imgur.com/5zfcg9C.png"/></a>
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
		</>
	);
};


export default Signup;