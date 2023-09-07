import { useNavigate } from "react-router-dom";
import { refreshFetch } from "../fetch/refreshFetch";
import { Button } from '@twilio-paste/core/button';

export function LogoutButton() {

	const navigate = useNavigate()
	const Logout = async () => {
		const response = await refreshFetch.post('httpd://localhost:3333/auth/logout');
		if (response.data = "Logout successful")
		{
			sessionStorage.clear();
			navigate("/landing");
		}
	}
	return (
		<>
			<Button variant="primary" onClick={Logout}>
				Logout
			</Button>
		</>
	);
}