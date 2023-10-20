import { useCallback, useEffect, useRef } from 'react';
import '../../CSS/AddFriends.css';
import '../../CSS/ChatPage.css';
import { useAuth } from '../../context/AuthContext';
import { useSocketContext } from '../../context/WebSocketContext';

export const AddFriends = ({
    open,
    setOpen,
    friendError,
    setFriendError,
}: any) => {
    const { user } = useAuth();
    const { socket, setSocketError } = useSocketContext();

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            if (open === 'addfriends') setOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOpen = () => {
        if (open === 'addfriends') setOpen(null);
        else {
            setOpen('addfriends');
            setFriendError('');
        }
    };

    const SendFriendRequest = useCallback(
        async (e: any) => {
            e.preventDefault();
            setFriendError(null);
            setSocketError(null);
            if (e.target.username.value == user?.username) return;
            socket?.emit('addFriend', {
                friendName: e.target.username.value,
                userId: user?.id,
            });
        },
        [user]
    );
	function AddFriendsDropdown() {
		return (
			<>
				<div className="chat-dropdown-menu">
					<form onSubmit={SendFriendRequest}>
					<div className="position-relative-input-friend">
						<h4>Add friend</h4>
						<div>
							<input
							className='chat-input-field'
							name="username"
							type="text"
							placeholder="Enter a username" />
						</div>
						<div className="chat-error-add-friend ">
							<span>{friendError}</span>
						</div>
					</div>
						<div>
							<button className='chat-submit-button'
							type="submit">Send friend request</button>
						</div>
					</form>
                </div>
            </>
        );
    }

    return (
        <div className="add-friends-dropdown" ref={dropdownRef}>
            <button className="add-friends-button" onClick={handleOpen}>
                Add Friends
            </button>
            {open === 'addfriends' ? <AddFriendsDropdown /> : null}
        </div>
    );
};

export default AddFriends;
