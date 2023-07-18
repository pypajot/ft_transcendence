import { useEffect, useState } from 'react';
import { UserAPI } from './api/UserAPI';
import { UserDTO } from './api/dto/user.dto';
import './App.css';

function App() {

	const [user, setUser] = useState<UserDTO>();


	useEffect(() => {
		async function FetchUser() {
			const response = await UserAPI.getUser();
			console.log(response);
			setUser(response);
		}

		FetchUser();
	}, []);

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
			body: JSON.stringify(formBody)			
		})
	}

	return (
		<>
			<div>
				<h1>Auth Form</h1>
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
				<h1>Users</h1>
				<ul>{user?.id}</ul>
				{/* <ul>{user?.username}</ul> */}
				<ul>{user?.password}</ul>
			</div>
		</>
	);
}
// <input type="submit" value="Submit" />

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App