import { useEffect, useState } from 'react';
import './Profile.css';
import { refreshFetch } from '../../fetch/refreshFetch';
import { LogoutButton } from '../../components/LogoutButton';

const Profile = () => {

	const [user, setUser] = useState<string>();


	useEffect(() => {
		async function FetchUser() {
			// await refreshFetch("/user/me", {retry: false})
			// .then(response => setUser(JSON.stringify(response.data)))
			fetch("/user/me", {
				headers: { 'Content-Type': 'application/json' },
			})
			.then(response => response.json)
			.then(response => setUser(JSON.stringify(response)));
		}
		console.log("test");
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