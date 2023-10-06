import { useState } from "react";
import './Notifications.css';
import { useSocketContext } from "../context/WebSocketContext";
import { useAuth } from "../context/AuthContext";

export const First = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  function FriendRequestList() {
	const { user } = useAuth();
	const { socket } = useSocketContext();

	const AcceptFriendRequest = async (id: number, accept: boolean) => {
		socket?.emit('respondFriendRequest', {
			friendId: id,
			userId: user?.id,
			accept: accept,
		});
	};
	const list = user?.friendsRequest?.map((user: any) => (
		<div key={user.username}>
			<h4>
				{user.username.length > 12
                        ? user.username.substring(12, 0) + '...'
                        : user.username}
			</h4>
			<div>
				<img
					src="https://i.imgur.com/mcvzebj.png"
					onClick={() => AcceptFriendRequest(user.id, true)} />
			</div>
			<div>
				<img
					src="https://clipart-library.com/images/yikroKr4T.png"
					onClick={() => AcceptFriendRequest(user.id, false)} />
			</div>
		</div>
	));

	return (
		<>
			<div className="friend-request-list">
				{list}
			</div>
		</>
	)
}

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Friend Requests</button>
      {open ? (
        <FriendRequestList />
      ) : null}
    </div>
  );
};

export default First;
