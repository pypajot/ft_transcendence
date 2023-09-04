import { useEffect, useState } from 'react';
import './Profile.css';
import { refreshFetch } from '../../fetch/refreshFetch';
import { LogoutButton } from '../../components/LogoutButton';

const Profile = () => {

	const [user, setUser] = useState<string>();


	useEffect(() => {
		async function FetchUser() {
			const response = await refreshFetch("/user/me")
			const data = await response.data.json();
			setUser(JSON.stringify(data));
		}

		FetchUser();
	}, []);

	return (
		<>
			<div>
				<h1>Profile</h1>
			</div>
			<div>
				<p>
					{user}
				</p>
			</div>
			<div>
				<LogoutButton />
			</div>
		</>
	);
};


export default Profile;