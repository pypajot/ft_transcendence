import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar, { Navbar2 } from '../../components/Navbar';
import { Button, Checkbox } from '@twilio-paste/core';
import { User } from '../../context/AuthContext';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { isAbsolute } from 'path';
import { useSocketContext } from '../../context/WebSocketContext';
import { ProfileContext } from '../../context/ProfileContext';


const Profile = () => {

	const { user, setUser, refreshFetch } = useAuth();
	const [imagePath, setImagePath] = useState<string | null>(null);
	const socket = useSocketContext();

	function DisplayAvatar() {
		return (
			<>
				<div>
					<img src={user?.avatar} width={150} height={150} />
				</div>
			</>
		)
	}
	
	function ChangeAvatar() {
		async function HandleChangeAvatar(e: any) {
			e.preventDefault();
			const response = await refreshFetch("http://localhost:3333/user/avatar", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
				},
				body: JSON.stringify({file: e.target.file.value})
			});
			if (response.status === 201)
				user && setUser({...user, avatar: (await response.json()).avatar});
		}
		return (
			<>
				<form onSubmit={HandleChangeAvatar}>
					<div>
						<label>
							File Path: <input type="text" name="file" />
						</label>
					</div>
					<div>
						<button type="submit">
							Upload
						</button>
					</div>
				</form>
			</>
		)
	}

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

	function ChangeUsernameForm() {

		async function HandleChangeUsername(e: any) {
			e.preventDefault();
			const response = await refreshFetch('http://localhost:3333/user/username', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
				},
				body: JSON.stringify({newName: e.target.username.value})
			});
			if (response.status === 201) {
				user && setUser({...user, username: e.target.username.value})
			}
		}

		return (
			<>
				<form onSubmit={HandleChangeUsername}>
					<div>
						<label>
							New username: <input type="text" name="username"  />
						</label>
					</div>
					<div>
						<button type="submit">
							Submit
						</button>
					</div>
				</form>
			</>
		)
	}
	
	function QrDisplay() {
		if (!imagePath)
			return (<></>)
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
			<DisplayAvatar />
			<ChangeAvatar />
			<div>
				username:
				<p>
					{user?.username}
				</p>
				<p>
					<div>
						<ChangeUsernameForm />
					</div>
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