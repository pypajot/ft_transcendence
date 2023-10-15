import { useEffect, useRef, useState } from "react";
import './Notifications.css';
import { useSocketContext } from "../context/WebSocketContext";
import { useAuth } from "../context/AuthContext";

export const First = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
	const list = user?.friendsRequest?.map((friend: any) => (
		<div key={friend.username} style={(user?.friendsRequest.indexOf(friend) !== user?.friendsRequest.length - 1) ?
										   {borderBottomWidth: "2px"} :
										   {}}>
			<h4>
				{friend.username.length > 12
                        ? friend.username.substring(12, 0) + '...'
                        : friend.username}
			</h4>
			<div>
				<img
					src="https://i.imgur.com/S2a3Zn9.png"
					onClick={() => AcceptFriendRequest(friend.id, true)} />
			</div>
			<div>
				<img
					src="https://i.imgur.com/ZhQ6mZL.png"
					onClick={() => AcceptFriendRequest(friend.id, false)} />
			</div>
		</div>
	));

	const no_request = (
		<div>
			<h4>No Friend Request</h4>
		</div>
	);

	return (
		<>
			<div className="notification-dropdown-menu">
				{user?.friendsRequest.length ? list : no_request}
			</div>
		</>
	)
}

  return (
    <div className="dropdown"  ref={dropdownRef}>
      <button onClick={handleOpen}>
		<img src="https://i.imgur.com/R0m4Bfy.png" className="friend-request-logo"></img>
	  </button>
      {open ? (
        <FriendRequestList />
      ) : null}
    </div>
  );
};

export default First;
