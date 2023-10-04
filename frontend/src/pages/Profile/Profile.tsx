import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import { Button, Checkbox, HelpText } from '@twilio-paste/core';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';

import {Uploader} from "uploader"
import { UploadButton } from "react-uploader";
import HelperText from '../../components/HelperText';
import { useNavigate, useSearchParams } from 'react-router-dom';

const uploader = Uploader({
	apiKey: "free"
  });

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
  
const Profile = () => {

	const { user, setUser, refreshFetch } = useAuth();
	const [imagePath, setImagePath] = useState<string | null>(null);
	const { socket } = useSocketContext();
	const [usernameError, setUsernameError] = useState<string | null>(null);
	const [codeError, setCodeError] = useState<string | null>(null);
	const [searchParams] = useSearchParams();
	const [currentUser, setCurrentUser] = useState<{id: number, username: string, avatar: string, matchHistory: GameType[]} | null>(null);
	const [displayMyProfile, setDisplayMyProfile] = useState<boolean>(true);
	const navigate = useNavigate();
	const run = useRef(true);

	// useEffect(() => {
	// 	run.current = true;
	// }, [searchParams.get("id")])

	useEffect(() => {
		const getCurrentUser = async (id: string | null) => {
			const response = await refreshFetch('http://localhost:3333/user/' + id, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
				},
			});
			if (response.status === 400) {
				navigate("/error");
				return ;
			}
			setCurrentUser(await response.json());
			setDisplayMyProfile(id === user?.id.toString());
		}
		if (!user || !run.current)
			return ;
		if (!searchParams.get("id"))
			getCurrentUser(user.id.toString());
		else
			getCurrentUser(searchParams.get("id"));
		run.current = false;
	}, [user, searchParams.get("id")])
	
	if (!currentUser || !user)
		return ;

	const DisplayAvatar = (props: {img: string}) => {
		return (
			<>
				<div>
					<img src={props.img} width={150} height={150} />
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
		if (!user || !currentUser || user.id !== currentUser?.id)
			return ;
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
		if (!user || !currentUser || user.id !== currentUser?.id)
			return ;
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

	function MatchHistoryDisplay() {
		// const run = useRef(false);
		// const [matchHistory, setMatchHistory] = useState<GameType[]>([]);
	  
		// useEffect(() => {
		//   const fetchMatchHistory = async () => {
		// 	try {
		// 	  const response = await refreshFetch('http://localhost:3333/profile/match-history/' + `${props.id}`, {
		// 		headers: { 'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
		// 	  });
		// 	  const games = await response.json();
		// 	  setMatchHistory(games);
		// 	} catch (error) {
		// 	  console.error('Error fetching match history:', error);
		// 	}
		//   };
		//   if (!run.current)
		// 	fetchMatchHistory();
		//   run.current = true;
		// }, []);
	  
		return (
		  <div>
			<h2>Match History</h2>
			<ul>
			  {currentUser?.matchHistory && currentUser.matchHistory.map(game => (
				<li key={game.id}>
				  Opponent: {game.winner.username === currentUser?.username ? game.loser.username : game.winner.username} - 
				  {game.winner.username === currentUser?.username ? 'Win' : 'Loss'} -
				  Score: {game.winnerScore} - {game.loserScore}
				</li>
			  ))}
			</ul>
		  </div>
		);
	  }
	  
	function  DisplayUsername(props: {username: string}) {
		return (
			<p>
				{props.username}
			</p>
		)
	}

	function DisplayActivate2fa() {
		if (!user || !currentUser || user.id !== currentUser?.id)
			return ;
		return (
			<>
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
				</>
		)
	}

	return (
		<>
			<Navbar/>
			<div>
				<h1>Profile</h1>
			</div>
			<DisplayAvatar img={currentUser?.avatar} />
			<ChangeAvatar />
			<div>
				username:
				<DisplayUsername username={currentUser.username} />
					<div>
						<ChangeUsernameForm />
					</div>
				<DisplayActivate2fa />
				<MatchHistoryDisplay />
			</div>
			
		</>
	);
};


export default Profile;