import { useCallback, useEffect, useRef } from "react";
import './BlockUser.css';
import './ChatPage.css';
import { useAuth } from "../../context/AuthContext";
import { useSocketContext } from "../../context/WebSocketContext";


export const BlockUser = ({open, setOpen, setFriendError } : any) => {
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
				<div className="chat-dropdown-menu">
					<form onSubmit={BlockUser}>
						<div className="position-relative-input-block">
							<h4>Block user</h4>
							<div>
								<input
								className='chat-input-field'
								name="username"
								type="text"
								placeholder="Enter a username" />
							</div>
							<div className="chat-error-block-users">
							{socketError?.func === "blockUser" && <span>{socketError?.msg}</span>}
							</div>
						</div>
							<div>
								<button 
									className='chat-submit-button'
									type="submit">Block user
								</button>
							</div>
						</form>
						<form onSubmit={UnblockUser}>
						<div className="position-relative-input-block">
							<h4>Unblock user</h4>
							<div>
								<input
								className='chat-input-field'
								name="username"
								type="text"
								placeholder="Enter a username" />
							</div>
							<div className="chat-error-block-users">
								{socketError?.func === "unblockUser" && <span>{socketError?.msg}</span>}
							</div>
						</div>
						<div>
							<button 
								className='chat-submit-button'
								type="submit">Unblock user
							</button>
						</div>
					</form>
				</div>
		)
	}

  return (
    <div className="block-user-dropdown"  ref={dropdownRef}>
      	<button className="block-user-button"
	  		onClick={handleOpen}>Block users
		</button>
      {open === "blockUser" ? (
        <BlockUserDropdown />
      ) : null}
    </div>
  );
};

export default BlockUser;
