import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar, { Navbar2 } from '../../components/Navbar';
import { useEffect } from 'react';

const Profile = () => {

	const { user } = useAuth();
	// useEffect(() => {
	// 	refreshFetch('http://localhost:3333/user/me', {
	// 		headers: { 'Authorization': `Bearer ${accessToken}` },
	// 	})
	// 	.then((response: any) => response.json())
	// 	.then((response: any) => setUser(response));
	// }, [])
	return (
		<>
			<Navbar/>
			<div>
				<h1>Profile</h1>
			</div>
			<div>
				username:
				<p>
					{user?.username}
				</p>
			</div>
		</>
	);
};


export default Profile;