import { useSocketContext } from "./WebSocketContext";
import { User, useAuth } from "./AuthContext";
import { useEffect, createContext, useMemo, useState } from "react";


export interface ProfileContextData {
	friendRequestList: User[];
	setFriendRequestList: React.Dispatch<React.SetStateAction<User[]>>;
	friendList: User[];
	setFriendList: React.Dispatch<React.SetStateAction<User[]>>;
}

export const ProfileContext = createContext<ProfileContextData>({} as ProfileContextData);

export const ProfileProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

	const { socket } = useSocketContext();
	const { user, refreshFetch } = useAuth();
	const [friendRequestList, setFriendRequestList] = useState<User[]>([]);
	const [friendList, setFriendList] = useState<User[]>([]);
	const [blockUser, setBlockedUser] = useState<User[]>([]);

	useEffect(() => {
		const getFriendRequests = async () => {
			const response = await refreshFetch('http://localhost:3333/user/friend/request', {
				headers: {
					'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`,
					'Content-Type': 'application/json'
				}
			});
			setFriendRequestList(await response.json());
		}
		const getFriendList = async () => {
			const response = await refreshFetch('http://localhost:3333/user/friend/list', {
				headers: {
					'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`,
					'Content-Type': 'application/json'
				}
			});
			setFriendList(await response.json());
		}
		if (!socket)
			return ;
		if (!user) {
			setFriendRequestList([]);
			setFriendList([]);
			return ;
		}
		getFriendRequests();
		getFriendList();
		socket.on("friendRequestFrom", (user: any) => {
			const newRequest: User = user
			setFriendRequestList(current => [...current, newRequest])
		})
		socket.on("friendAdded", (user: any) => {
			const newFriend: User = user
			setFriendList(current => [...current, newFriend])
		})
		return (() => {
			socket.off("friendRequestFrom");
			socket.off("friendAdded");
		})
	}, [user, socket])

	useEffect(() => {
		if (!user || !socket || user.twoFactorAuthActive )
			return ;
		socket.emit("updateUser", user);
	}, [user && user.twoFactorAuthActive]);

	const value = useMemo(() => ({
		friendRequestList,
		setFriendRequestList,
		friendList,
		setFriendList
	}),[friendRequestList, setFriendRequestList, friendList, setFriendList]);

	return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}