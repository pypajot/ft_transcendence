import { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';
import { useSocketContext } from '../../context/WebSocketContext';
import { ProfileContext } from '../../context/ProfileContext';
import { Button } from '@twilio-paste/core';

const Friends = () => {
	const socket = useSocketContext();
	const { user } = useAuth()
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

	async function BlockUser(e: any) {
		e.preventDefault();
		socket.emit("blockUser", {targetName: e.target.username.value, userId: user?.id});
	}
	
	function BlockUserForm() {
		return (
			<>
			<form onSubmit={BlockUser}>
				<div>
					<label>
						Username: <input type="text" name="username" />
					</label>
				</div>
				<div>
					<button type="submit">
						Block user
					</button>
				</div>
			</form>
		</>
		)
	}

	function FriendRequestList() {
		const {friendRequestList, setFriendRequestList} = useContext(ProfileContext)
		const { user } = useAuth();
		const socket = useSocketContext()
		const AcceptFriendRequest = async (id: number, accept: boolean) => {
			socket.emit("respondFriendRequest", { friendId: id, userId: user?.id, accept: accept});
			setFriendRequestList(current => current.filter(
				value => (value.id !== id)
			))
		}
		const list = friendRequestList?.map((user: any) => (
			<>
				<div>
					{user.username} wants to be your friend !
				</div>
				<div>
					<Button variant="primary" onClick={() => AcceptFriendRequest(user.id, true)}>Accept</Button>
					<Button variant="secondary" onClick={() => AcceptFriendRequest(user.id, false)}>Decline</Button>
				</div>
			</>
		));
		return (
			<>
				{list}
			</>
		)
	}

	return (
		<>
		<Navbar />
		<div>
				<BlockUserForm />
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

export default Friends;