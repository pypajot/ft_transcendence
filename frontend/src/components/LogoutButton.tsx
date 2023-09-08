import { useNavigate } from "react-router-dom";
import { refreshFetch } from "../fetch/refreshFetch";
import { Button } from '@twilio-paste/core/button';
import { useAuth } from "../context/AuthContext";


export function LogoutButton() {

	const navigate = useNavigate()
	const { setUser } = useAuth();
	const Logout = async () => {
		const response = await refreshFetch.post('http://localhost:3333/auth/logout');
		if (response.data = "Logout successful")
		{
			sessionStorage.clear();
			setUser(null);
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