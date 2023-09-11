import './Login.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login() {

	// const [user, setUser] = useState<UserDTO>();


	// useEffect(() => {
	// 	async function FetchUser() {
	// 		const response = await UserAPI.getUser();
	// 		console.log(response);
	// 		setUser(response);
	// 	}

	// 	FetchUser();
	// }, []);
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
		// alert(JSON.stringify(formBody));
		const response = await fetch('http://localhost:3333/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formBody),
			credentials: 'include',
		})
		// sessionStorage('access_token', (await response.json()).access_token);
		.then(response => response.json())
		.then(response => setAccessToken(response.access_token))
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
			<div>
				Don't have an account ?
			</div>
			<Link to='/signup'>
				<button>
					Register here
				</button>
			</Link>
		</>
	);
};


export default Login;