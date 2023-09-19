import { useSocketContext } from "./WebSocketContext";
import { User, useAuth } from "./AuthContext";
import { useEffect, createContext, useMemo, useState } from "react";


export interface ProfileContextData {
	friendRequestList: User[];
	setFriendRequestList: (list: User[]) => void;
}

export const ProfileContext = createContext<ProfileContextData>({} as ProfileContextData);

export const ProfileProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

	const socket = useSocketContext();
	const { user, refreshFetch } = useAuth();
	const [friendRequestList, setFriendRequestList] = useState<User[]>([]);
	const [friendList, setFriendList] = useState<User[]>([]);

	useEffect(() => {
		const getFriendRequests = async () => {
			const response = await refreshFetch('http://localhost:3333/user/friend/request', {
				headers: {
					'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`,
					'Content-Type': 'application/json'
				}
			});
			setFriendRequestList(await response.json());
			console.log("context", friendRequestList);
		}
		console.log("user: context", user);
		if (!socket)
			return ;
		if (!user) {
			setFriendRequestList([]);
			return ;
		}
		getFriendRequests();
		socket.on("friendRequestFrom", (user: any) => {
			const newRequest: User = {id: user.id, username: user.username}
			setFriendRequestList(current => [...current, newRequest])
		})
	}, [user, socket])

	useEffect(() => {
		if (!user || !socket || user.twoFactorAuthActive )
			return ;
		socket.emit("updateUser", user);
	}, [user && user.twoFactorAuthActive]);

	const value = useMemo(() => ({
		friendRequestList,
		setFriendRequestList
	}),[friendRequestList, setFriendRequestList]);

	return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}