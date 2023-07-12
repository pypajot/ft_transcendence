import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { json } from 'stream/consumers';





function App() {

	async function HandleSubmit(e: any)
	{
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		var formBody = {
				"username": "test",
				"password": "test"
		}
		// for (var property in formData)
		// {
		// 	console.log(property);
			// var encodedKey = encodeURIComponent(property[0]);
			// var encodedValue = encodeURIComponent(property[1]);
			// formBody.push(encodedKey + "=" + encodedValue);
		// }
		// const data = {
		// 	username: formData.get('username'),
		// 	password: formData.get('password')
		// };
		alert(JSON.stringify(formBody));
		await fetch('http://localhost:3333/auth/signup', {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(formBody)
				// formData
			
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
