import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar, { Navbar2 } from '../../components/Navbar';
import { Button, Checkbox, HelpText } from '@twilio-paste/core';
import { User } from '../../context/AuthContext';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { isAbsolute } from 'path';
import { useSocketContext } from '../../context/WebSocketContext';
import { ProfileContext } from '../../context/ProfileContext';

import {Uploader} from "uploader"
import { UploadButton } from "react-uploader";
import HelperText from '../../components/HelperText';

const uploader = Uploader({
	apiKey: "free"
  });

const Profile = () => {

	const { user, setUser, refreshFetch } = useAuth();
	const [imagePath, setImagePath] = useState<string | null>(null);
	const { socket } = useSocketContext();
	const [usernameError, setUsernameError] = useState<string | null>(null);
	const [codeError, setCodeError] = useState<string | null>(null);

	if (!user)
		return ;

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
		async function HandleChangeAvatar(files: any) {
			const fileUrl = files.map((x: any) => x.fileUrl)[0];
			console.log(fileUrl);
			if (!fileUrl)
				return ;
			socket?.emit("changeAvatar", fileUrl);
			// const response = await refreshFetch("http://localhost:3333/user/avatar", {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
			// 	},
			// 	body: JSON.stringify({file: fileUrl})
			// });
			// if (response.status === 201)
			// 	user && setUser({...user, avatar: fileUrl});
		}
		return (
			<>
				<div>
					Change avatar
				</div>
				<UploadButton uploader={uploader}
					onComplete={HandleChangeAvatar}>
					{({onClick}) =>
						<button onClick={onClick}>
							Upload file
						</button>
					}
				</UploadButton>
			</>
		)
	}

	async function HandleSubmit(e: any) {
		e.preventDefault();
		setCodeError(null);
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
			sessionStorage.setItem("access_token", (await response.json().token))
			user && setUser({...user, twoFactorAuthActive: true})
		}
		else if (response.status !== 401)
			setCodeError((await response.json()).message);
	}

	function ChangeUsernameForm() {

		async function HandleChangeUsername(e: any) {
			e.preventDefault();
			setUsernameError(null);
			socket?.emit("changeUsername", e.target.username.value);

			// const response = await refreshFetch('http://localhost:3333/user/username', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
			// 	},
			// 	body: JSON.stringify({newName: e.target.username.value})
			// });
			// if (response.status === 201)
			// 	user && setUser({...user, username: e.target.username.value})
			// else if (response.status !== 401)
			// 	setUsernameError((await response.json()).message);
		}

		return (
			<>
				<form onSubmit={HandleChangeUsername}>
					<div>
						<label>
							New username: <input type="text" name="username"  />
							<HelperText errorText={usernameError} />
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
								<HelperText errorText={codeError} />
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

	type GameType = {
		id: string;
		winner: {
		  username: string;
		};
		loser: {
		  username: string;
		};
		winnerScore: number;
		loserScore: number;
	  };

	function MatchHistoryDisplay() {
		const run = useRef(false);
		const [matchHistory, setMatchHistory] = useState<GameType[]>([]);
	  
		useEffect(() => {
		  const fetchMatchHistory = async () => {
			try {
			  const response = await refreshFetch('http://localhost:3333/profile/match-history', {
				headers: { 'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
			  });
			  const games = await response.json();
			  setMatchHistory(games);
			} catch (error) {
			  console.error('Error fetching match history:', error);
			}
		  };
		  if (!run.current)
			fetchMatchHistory();
		  run.current = true;
		}, []);
	  
		return (
		  <div>
			<h2>Match History</h2>
			<ul>
			  {matchHistory.map(game => (
				<li key={game.id}>
				  Opponent: {game.winner.username === user?.username ? game.loser.username : game.winner.username} - 
				  {game.winner.username === user?.username ? 'Win' : 'Loss'} -
				  Score: {game.winnerScore} - {game.loserScore}
				</li>
			  ))}
			</ul>
		  </div>
		);
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
				
					<div>
						<ChangeUsernameForm />
					</div>
				<Checkbox
					id="controlled"
					value="controlled"
					name="controlled"
					checked={user.twoFactorAuthActive}
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
				
				<QrDisplay />

				<MatchHistoryDisplay />
			</div>
			
		</>
	);
};


export default Profile;