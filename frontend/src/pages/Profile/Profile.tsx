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

		async function SendFriendRequest(e: any) {
			e.preventDefault();
			socket.emit("addFriend", {friendName: e.target.username.value, userId: user?.id});
		}
		
		function FriendRequestForm() {
			return (
				<>
				<form onSubmit={SendFriendRequest}>
					<div>
						<label>
							Username: <input type="text" name="username" />
						</label>
					</div>
					<div>
						<button type="submit">
							Send friend request
						</button>
					</div>
				</form>
			</>
		)
	}

	function FriendRequestElement(id: number, username: string) {
		const AcceptFriendRequest = async (accept: boolean) => {
			await refreshFetch('http://localhost:3333/user/friend/request', {
				method: 'POST',
				headers: {
					'Autorization': `Bearer ${sessionStorage.getItem("access_token")}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({friendId: id, accept: accept})
			});

		return (
			<>
				<div>
					{username} wants to be your friend !
				</div>
				<div>
					<Button variant="primary" onClick={() => AcceptFriendRequest(true)}>Accept</Button>
					<Button variant="secondary" onClick={() => AcceptFriendRequest(false)}>Decline</Button>
				</div>
			</>
		)}
	}

	function FriendRequestList() {
		const {friendRequestList} = useContext(ProfileContext)
		console.log("Profile", friendRequestList);
		const list = friendRequestList?.map((user: any) => FriendRequestElement(user.id, user.username));

		return (
			<>
				{list}
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
			<div>
				<FriendRequestForm />
			</div>
			
			<div>
				Friend requests:
			</div>
			<div>
				<FriendRequestList />
			</div>
			
		</>
	);
};


export default Profile;