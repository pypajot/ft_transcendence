import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar, { Navbar2 } from '../../components/Navbar';
import { Checkbox } from '@twilio-paste/core';
import { User } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { isAbsolute } from 'path';

const Profile = () => {

	const { user, setUser, refreshFetch } = useAuth();
	const [imagePath, setImagePath] = useState<string | null>(null);

	async function HandleSubmit(e: any) {
		e.preventDefault();
		const response = await refreshFetch('http://localhost:3333/auth/2fa/confirm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
			},
			body: JSON.stringify({code: e.target.code.value})
		});
		if (response.status === 201) {
			setImagePath(null);
			user && setUser({...user, twoFactorAuthActive: true})
		};
	}

	function QrDisplay() {
		if (imagePath)
			return (
				<>
					<div>
						<img src={imagePath}/>
					</div>
					<div>
						<form onSubmit={HandleSubmit}>
							<div>
								<label>
									Authenticator code: <input type="text" name="code" />
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
			)
		return (
			<div />
		)
	}

	const activate2FA = async () => {
		await refreshFetch('http://localhost:3333/auth/2fa/activate', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
			}
		})
		.then((response: any) => response.json())
		.then((response: any) => setImagePath(response.imagePath.path));
	}

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
						if (user.twoFactorAuthActive)
							setUser({...user, twoFactorAuthActive: false});
						else
							activate2FA()
					}}
				>
				Activate Two Factor Authentification
				</Checkbox>
				</p>
				<QrDisplay />
			</div>
		</>
	);
};


export default Profile;