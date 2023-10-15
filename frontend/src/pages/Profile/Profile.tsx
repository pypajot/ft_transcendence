import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import { Checkbox } from '@twilio-paste/core';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import HelperText from '../../components/HelperText';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useProfileContext } from '../../context/ProfileContext';

const uploader = Uploader({
    apiKey: 'free',
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
    mode: string;
};
  

type AchievementType = {
	name: string;
	description: string;
	icon: string;
};

const Profile = () => {
	const { user, setUser, refreshFetch } = useAuth();
	const { socket, socketError, setSocketError } = useSocketContext();
	const {profileId, setProfileId} = useProfileContext();
	const [imagePath, setImagePath] = useState<string | null>(null);
	const [usernameError, setUsernameError] = useState<string | null>(null);
	const [codeError, setCodeError] = useState<string | null>(null);
	const [searchParams] = useSearchParams();
	const [currentUser, setCurrentUser] = useState<{id: number, username: string, avatar: string, matchHistory: GameType[], elo: number, achievements: AchievementType[]} | null>(null);
	const navigate = useNavigate();
	const run = useRef(true);

	async function GetUserProfile(e: any) {
        e.preventDefault();
        setSocketError(null);
        setProfileId(0);
        socket?.emit('getProfileId', e.target.username.value);
    }

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
		}
		if (profileId) {
			navigate("/profile" + `?id=${profileId}`);
			return ;
		}
		if (!user || !run.current)
			return ;
		if (!searchParams.get("id"))
			getCurrentUser(user.id.toString());
		else
			getCurrentUser(searchParams.get("id"));
		run.current = false;
	}, [user, searchParams.get("id"), profileId])
	
	// if (!currentUser || !user)
	// 	return ;

    const DisplayAvatar = (props: { img: string }) => {
        return (
            <>
                <div className="avatar-div">
                    <img
                        src={props.img}
                        width={150}
                        height={150}
                        className="avatar-dimensions"
                    />
                </div>
            </>
        );
    };

	//chgmt
    function ChangeAvatar() {
        async function HandleChangeAvatar(files: any) {
            const fileUrl = files.map((x: any) => x.fileUrl)[0];
            if (!fileUrl) return;
            socket?.emit('changeAvatar', fileUrl);
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
        if (!user || !currentUser || user.id !== currentUser?.id) return;
        return (
            <>
                <div className="avatar-button-div">
                    <UploadButton
                        uploader={uploader}
                        onComplete={HandleChangeAvatar}>
                        {({ onClick }) => (
                            <button onClick={onClick} className="avatar-button">
                                <img
                                    src="https://i.imgur.com/GU9MG2a.png"
                                    className="change-avatar-img"></img>
                            </button>
                        )}
                    </UploadButton>
                </div>
            </>
        );
    }

//chgmt

	function UserProfileForm() {
		return (
			<>
				<div className="search-profile">
					<form onSubmit={GetUserProfile}>
						<div className='input-ctn'>
							<label>
								<input 
									className='user-input-new'
									placeholder="Enter a username"
									type="text"
									name="username"/>
							</label>
							<h5>{socketError?.func === "getProfileId" ? socketError.msg : null}</h5>
						</div>
							<button className='submit-button-new' type="submit">View Profile</button>
					</form>
				</div>
			</>
		);
	}

    async function HandleSubmit(e: any) {
		e.preventDefault();
		setCodeError(null);
		console.log(e.target.code.value);
		const response = await refreshFetch('http://localhost:3333/auth/2fa/confirm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
			},
			body: JSON.stringify({code: e.target.code.value})
		});
		console.log("response status: ", response.status, response.ok);
		if (response.status == 403)
			setCodeError((await response.json()).message);
		if (!response.ok)
			return ;
		setImagePath(null);
		sessionStorage.setItem("access_token", (await response.json().token))
		user && setUser({...user, twoFactorAuthActive: true})
	}

    function ChangeUsernameForm() {
        async function HandleChangeUsername(e: any) {
            e.preventDefault();
            setUsernameError(null);
            socket?.emit('changeUsername', e.target.username.value);

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
        if (!user || !currentUser || user.id !== currentUser?.id) return;
        return (
            <>
                <div>
                    <form onSubmit={HandleChangeUsername}>
                        <div className="div-submit-button-new">
                            <label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="  new username"
                                    className="user-input-new"
                                />
                                <HelperText errorText={usernameError} />
                            </label>
                        </div>
                        <div className="submit-button-new-div">
                            <button type="submit" className="submit-button-new">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
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
							<button type="submit" className='submit-button-new'>
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
		return (
		  <div className='match-history'>
			<UserProfileForm/>
			<img src='https://i.imgur.com/bZsILPR.png' className='match-img'></img>
			<div className='stats'>
				<div className='game-stats'>
					<h2>ELO : {currentUser?.elo}</h2>
					<ul>
					{currentUser?.matchHistory && currentUser.matchHistory.map(game => (
						<li key={game.id} className='match'>
							<div className='game-outcome'>
								<h4> {game.winner.username === currentUser?.username ? ' Won' : ' Lost'} against :</h4>
							</div>
							<div className='game-opponent'>
								<h4>{game.winner.username === currentUser?.username ? game.loser.username : game.winner.username}</h4>
							</div>
							<div className='game-score'>
								<h4>{game.winnerScore} - {game.loserScore}</h4>
							</div>
							<div className='game-mode'>
								<h4>{game.mode} game</h4>
							</div>
						</li>
					))}
					</ul>
				</div>
				<div className='achievements'>
					<h2>Achievements</h2>
					<ul>
					{currentUser?.achievements && currentUser.achievements.map(achievement => (
						<li key={achievement.name} className='achievement'>
							<img className='achievement-icon' 
								src={achievement.icon} width={50} height={50} />
							<div className='achievement-name'>
								<h4>{achievement.name}</h4>
							</div>
							<div className='achievement-description'>
								<h4>{achievement.description}</h4>
							</div>
						</li>
					))}
					</ul>
				</div>
			</div>
		  </div>
		);
	  }

    function DisplayUsername(props: { username: string }) {
        return <div className="display-username">{props.username}</div>;
    }

    function DisplayActivate2fa() {
        if (!user || !currentUser || user.id !== currentUser?.id) return;
        return (
            <>
                <div className="fa-div">
                    <Checkbox
                        id="controlled"
                        value="controlled"
                        name="controlled"
                        checked={user.twoFactorAuthActive}
                        onChange={() => {
                            if (!user) return;
                            if (user.twoFactorAuthActive)
                                setUser({
                                    ...user,
                                    twoFactorAuthActive: false,
                                });
                            else activate2FA();
                        }}>
                        Activate Two Factor Authentification
                    </Checkbox>
                    <QrDisplay />
                </div>
            </>
        );
    }

	return (
		<>
			<Navbar/>
			<div className='profile-title'>
				<div className='logo-profile'>
					<img src='https://i.imgur.com/2xFFdd3.png' className='logo-profile-size'></img>
				</div>
			</div>
			<div className='profile-wrapper'>
				<div className='left-profile'>
					<DisplayAvatar img={currentUser ? currentUser?.avatar : ""} />
					<ChangeAvatar />
					<DisplayUsername username={currentUser ? currentUser.username : ""} />
					<ChangeUsernameForm />
					<DisplayActivate2fa />
				</div>
				<MatchHistoryDisplay />
			</div>
		</>
	);
};

export default Profile;
