import { useCallback, useEffect, useRef, useState } from "react";
import './AddFriends.css';
import { useAuth } from "../../context/AuthContext";
import { useSocketContext } from "../../context/WebSocketContext";


export const AddFriends = ({open, setOpen, friendError, setFriendError } : any) => {
	const {user} = useAuth();
	const { socket, socketError, setSocketError } = useSocketContext();

	const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			console.log("close when outside component")
            setOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

	const handleOpen = () => {
		if (open === "addfriends")
			setOpen(null)
		else {
			setOpen("addfriends");
			setFriendError("");
		}
	};
		
	const SendFriendRequest = useCallback(async (e: any) => {
		e.preventDefault();
		setFriendError(null);
		setSocketError(null);
		socket?.emit('addFriend', {
			friendName: e.target.username.value,
			userId: user?.id,
		});
	}, [user])

	function AddFriendsDropdown() {
		return (
			<>
				<div className="add-friends">
					<h4>Add friend</h4>
					<form onSubmit={SendFriendRequest}>
						<div>
							<input
							name="username"
							type="text"
							placeholder="Enter a username" />
						</div>
						<div>
							<h4 className="error">{friendError}</h4>
						</div>
						<div>
							<button type="submit">Send friend request</button>
						</div>
					</form>

				</div>
			</>
		)
	}

  return (
    <div className="add-friends-dropdown"  ref={dropdownRef}>
      <button onClick={handleOpen}>Friend Requests</button>
      {open === "addfriends" ? (
        <AddFriendsDropdown />
      ) : null}
    </div>
  );
};

export default AddFriends;
