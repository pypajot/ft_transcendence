import { useSocketContext } from './WebSocketContext';
import { useAuth } from './AuthContext';
import { useEffect, createContext, useMemo, useState, useContext } from 'react';
import { User } from '../../Types/inferfaceList';

export interface ProfileContextData {
    friendRequestList: User[];
    setFriendRequestList: React.Dispatch<React.SetStateAction<User[]>>;
    friendList: User[];
    setFriendList: React.Dispatch<React.SetStateAction<User[]>>;
	profileId: number;
	setProfileId: React.Dispatch<React.SetStateAction<number>>;
}

export const ProfileContext = createContext<ProfileContextData>(
    {} as ProfileContextData
);

export const useProfileContext = () => {
	return useContext(ProfileContext);
}

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { socket } = useSocketContext();
    const { user } = useAuth();
    const [friendRequestList, setFriendRequestList] = useState<User[]>([]);
    const [friendList, setFriendList] = useState<User[]>([]);
	const [profileId, setProfileId] = useState<number>(0);

    useEffect(() => {
        if (!socket) return;
        if (!user) {
            setFriendRequestList([]);
            setFriendList([]);
            return;
        }
        // getFriendRequests();
        // getFriendList();
        socket.on('friendRequestFrom', (user: any) => {
            const newRequest: User = user;
            setFriendRequestList((current) => [...current, newRequest]);
        });
        socket.on('friendAdded', (user: any) => {
            const newFriend: User = user;
            setFriendList((current) => [...current, newFriend]);
        });
		socket.on('profileId', (id: number) => {
			console.log("profileId context: ", id)
			setProfileId(id);
		})
        return () => {
            socket.off('friendRequestFrom');
            socket.off('friendAdded');
			socket.off('profileId');
        };
    }, [user, socket]);

    useEffect(() => {
        if (!user || !socket || user.twoFactorAuthActive) return;
        socket.emit('updateUser', user);
    }, [user && user.twoFactorAuthActive]);

    const value = useMemo(
        () => ({
            friendRequestList,
            setFriendRequestList,
            friendList,
            setFriendList,
			profileId,
			setProfileId,
        }),
        [friendRequestList, setFriendRequestList, friendList, setFriendList, profileId, setProfileId]
    );

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
};
