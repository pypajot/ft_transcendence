import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar, { Navbar2 } from '../../components/Navbar';
import { Checkbox } from '@twilio-paste/core';
import { User } from '../../context/AuthContext';
import { useEffect } from 'react';

const Profile = () => {

	const { user, setUser } = useAuth();
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
				<p>
				<Checkbox
					id="controlled"
					value="controlled"
					name="controlled"
					checked={user?.twoFactorAuthActive}
					onChange={() => {
						if (!user)
							return ;
						setUser({...user, twoFactorAuthActive: !(user.twoFactorAuthActive)});
					}}
				>
				Activate Two Factor Authentification
				</Checkbox>

				</p>
			</div>
		</>
	);
};


export default Profile;