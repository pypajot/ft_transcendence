import { useCallback, useEffect, useRef, useState } from "react";
import './BlockUser.css';
import { useAuth } from "../../context/AuthContext";
import { useSocketContext } from "../../context/WebSocketContext";


export const BlockUser = ({open, setOpen, friendError, setFriendError } : any) => {
	const {user} = useAuth();
	const { socket, socketError, setSocketError } = useSocketContext();

	const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			if (open === "blockUser")
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
		if (open === "blockUser")
			setOpen(null)
		else {
			setOpen("blockUser");
			setFriendError("");
		}
	};
		
	const BlockUser = useCallback(async (e: any) => {
		e.preventDefault();
        setSocketError(null);
        setFriendError(null);
        socket?.emit('blockUser', {
            targetName: e.target.username.value,
            userId: user?.id,
        });
	}, [user])

	const UnblockUser = useCallback(async (e: any) => {
		e.preventDefault();
        setSocketError(null);
        setFriendError(null);
        socket?.emit('unblockUser', {
            targetName: e.target.username.value,
            userId: user?.id,
        });
	}, [user])

	function BlockUserDropdown() {
		return (
			<>
				<div className="block-user">
					<h4>Block user</h4>
					<form onSubmit={BlockUser}>
						<div>
							<input
							name="username"
							type="text"
							placeholder="Enter a username" />
						</div>
						<div>
						{socketError?.func === "blockUser" && <h4 className="chat-error">{socketError?.msg}</h4>}
						</div>
						<div>
							<button type="submit">Block user</button>
						</div>
					</form>
					<h4>Unblock user</h4>
					<form onSubmit={UnblockUser}>
						<div>
							<input
							name="username"
							type="text"
							placeholder="Enter a username" />
						</div>
						<div>
							{socketError?.func === "unblockUser" && <h4 className="chat-error">{socketError?.msg}</h4>}
						</div>
						<div>
							<button type="submit">Unblock user</button>
						</div>
					</form>

				</div>
			</>
		)
	}

  return (
    <div className="block-user-dropdown"  ref={dropdownRef}>
      <button onClick={handleOpen}>Block users</button>
      {open === "blockUser" ? (
        <BlockUserDropdown />
      ) : null}
    </div>
  );
};

export default BlockUser;
