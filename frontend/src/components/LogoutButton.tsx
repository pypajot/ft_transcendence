import { refreshFetch } from "../fetch/refreshFetch";

export function LogoutButton() {

	return (
		<>
			<button onClick={() => {
				refreshFetch.post('/auth/logout');
			}}>
				Logout
			</button>
		</>
	);
}