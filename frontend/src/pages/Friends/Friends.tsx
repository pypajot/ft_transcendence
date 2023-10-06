import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';
import { useSocketContext } from '../../context/WebSocketContext';
import { Button } from '@twilio-paste/core';
import HelperText from '../../components/HelperText';

const Friends = () => {
    const { socket, socketError, setSocketError } = useSocketContext();
    const { user } = useAuth();
    const [friendError, setFriendError] = useState<string | null>(null);
    const [blockError, setBlockError] = useState<string | null>(null);
    const [unblockError, setUnblockError] = useState<string | null>(null);

    useEffect(() => {
        setSocketError(null);
    }, []);

    useEffect(() => {
        // console.log(socketError);
        if (!socketError) return;
        if (socketError.func === 'addFriend') setFriendError(socketError.msg);
        if (socketError.func === 'blockUser') setBlockError(socketError.msg);
        if (socketError.func === 'unblockUser')
            setUnblockError(socketError.msg);
    }, [socketError]);

    async function SendFriendRequest(e: any) {
        e.preventDefault();
        setFriendError(null);
        setSocketError(null);
        socket?.emit('addFriend', {
            friendName: e.target.username.value,
            userId: user?.id,
        });
    }

    function FriendRequestForm() {
        return (
            <>
                <form onSubmit={SendFriendRequest}>
                        <label>
                            Username: <input type="text" name="username" />
                            <HelperText errorText={friendError} />
                        </label>
                        <button type="submit">Send friend request</button>
                </form>
            </>
        );
    }

    async function BlockUser(e: any) {
        e.preventDefault();
        setSocketError(null);
        setBlockError(null);
        socket?.emit('blockUser', {
            targetName: e.target.username.value,
            userId: user?.id,
        });
    }

    function BlockUserForm() {
        return (
            <>
                <form onSubmit={BlockUser}>
                        <label>
                            Username: <input type="text" name="username" />
                            <HelperText errorText={blockError} />
                        </label>
                        <button type="submit">Block user</button>
                </form>
            </>
        );
    }

    async function UnblockUser(e: any) {
        e.preventDefault();
        setSocketError(null);
        setUnblockError(null);
        socket?.emit('unblockUser', {
            targetName: e.target.username.value,
            userId: user?.id,
        });
    }

    function UnblockUserForm() {
        return (
            <>
                <form onSubmit={UnblockUser}>
                        <label>
                            Username: <input type="text" name="username" />
                            <HelperText errorText={unblockError} />
                        </label>
                        <button type="submit">Unblock user</button>
                </form>
            </>
        );
    }

    function FriendRequestList() {
        const { user, setUser } = useAuth();
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
                {user.username} wants to be your friend !
                <div>
                    <Button
                        variant="primary"
                        onClick={() => AcceptFriendRequest(user.id, true)}>
                        Accept
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => AcceptFriendRequest(user.id, false)}>
                        Decline
                    </Button>
                </div>
            </div>
        ));

        return <>{list}</>;
    }

    return (
        <>
            <Navbar />
            <div>
                <BlockUserForm />
            </div>
            <div>
                <UnblockUserForm />
            </div>
            <div>
                <FriendRequestForm />
            </div>

            <div>Friend requests:</div>
            <div>
                <FriendRequestList />
            </div>
        </>
    );
};

export default Friends;
