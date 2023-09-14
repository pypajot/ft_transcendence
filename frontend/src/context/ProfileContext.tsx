import { useSocketContext } from "./WebSocketContext";
import { useAuth } from "./AuthContext";
import { useEffect, createContext } from "react";


export interface ProfileContextData {
	test: () => void;
}

export const ProfileContext = createContext(undefined);

export const ProfileProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

	const socket = useSocketContext();
	const { user } = useAuth();

	useEffect(() => {
		if (!user || !socket || user.twoFactorAuthActive )
			return ;
		socket.emit("updateUser", user);
	}, [user && user.twoFactorAuthActive]);

	return (
        <ProfileContext.Provider>
            {children}
        </ProfileContext.Provider>
    )
}