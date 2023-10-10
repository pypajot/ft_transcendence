import * as React from 'react';
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    useCallback,
} from 'react';
import { Socket, io } from 'socket.io-client';
import { useAuth } from './AuthContext';

type WebContext = {
    socket: Socket | null;
    socketError: { func: string; msg: string } | null;
    setSocketError: React.Dispatch<
        React.SetStateAction<{ func: string; msg: string } | null>
    >;
};

type SocketContextProviderProps = {
    children: React.ReactNode;
};

export const SocketContext = createContext<WebContext>({} as WebContext);

export default function SocketContextProvider(
    props: SocketContextProviderProps
) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [socketError, setSocketError] = useState<{
        func: string;
        msg: string;
    } | null>(null);
    const { user, setUser, logout } = useAuth();
    const [token, setToken] = useState<string | null>(null);

    // const connect = useCallback(() => {
    // 	if (!user) return;
    //   console.log(user);
    // setToken(sessionStorage.getItem('access_token'));
    // const newSocket = io("http://localhost:3333/", {
    //     query: {
    //       token: token,
    //       username: user.username,
    //     },
    //   });
    // newSocket.on("connect_error", () => {
    //   try {
    // 	const response = await fetch('http://localhost:3333/auth/refresh', {
    // 		method: 'GET',
    // 		headers: {
    // 			'Content-Type': 'application/json',
    // 			"Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
    // 		},
    // 		credentials: 'include',
    // 	});
    // 	setToken((await response.json()).access_token);
    // 	sessionStorage.setItem("access_token", token)
    //   }
    // });
    // setSocket(newSocket);
    // newSocket.on("exception", (msg) => {
    // 	setSocketError(msg);
    // })
    // newSocket.on("updateUser", (user) => {
    // 	setUser((currentUser: any) => ({
    // 			...currentUser,
    // 			username: user.username,
    // 			avatar: user.avatar,
    // 			socketId: user.socketId,
    // 			twoFactorAuthActive: user.twoFactorAuthActive,
    // 			friends: user.friends,
    // 			friendsRequest: user.friendsRequest,
    // 			blocked: user.blocked
    // 	}));
    // });
    // newSocket.on("updateStatus", (args) => {
    // 	setUser((currentUser: any) => {
    // 		let newUser = currentUser;
    // 		newUser.friends[newUser.friends.findIndex(((obj: any) => obj.id === args.id))].status = args.status;
    // 		return newUser;
    // 	})
    // 	console.log("status: ", user);
    // });
    // console.log("socket context: ", user);

    // return () => {
    //   newSocket.off("connect_error");
    //   newSocket.off("exception");
    //   newSocket.off("updateUser");
    //   newSocket.off("updateStatus");
    //   newSocket.disconnect();
    // };
    // }, [])

    const refresh = async () => {
        const response = await fetch('http://localhost:3333/auth/refresh', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem(
                    'access_token'
                )}`,
            },
            credentials: 'include',
        });
        setToken((await response.json()).access_token);
        token && sessionStorage.setItem('access_token', token);
    };

    useEffect(() => {
        if (!user) return;
		const newSocket = io('http://localhost:3333/', {
            reconnectionDelay: 3000,
            query: {
                token: sessionStorage.getItem('access_token'),
                username: user.username,
            },
        });
        newSocket.on('connect_error', refresh);
        setSocket(newSocket);
        newSocket.on('exception', (err) => {
            setSocketError(err);
        });
        newSocket.on('updateUser', (newUser) => {
            setUser((currentUser: any) => ({
                ...currentUser,
                username: newUser.username,
                avatar: newUser.avatar,
                socketId: newUser.socketId,
                twoFactorAuthActive: newUser.twoFactorAuthActive,
                friends: newUser.friends,
                friendsRequest: newUser.friendsRequest,
                blocked: newUser.blocked,
				status: newUser.status,
            }));
        });
        newSocket.on('updateStatus', (args) => {
            
			let newUser = user;
			const index = newUser?.friends.findIndex(
				(obj: any) => obj.id === args.id
			);
			newUser.friends[index].status = args.status;

            setUser(newUser);
        });
        newSocket.on('error', (msg) => console.log('error: ', msg));

        return () => {
            newSocket.off('error');
            newSocket.off('connect_error');
            newSocket.off('exception');
            newSocket.off('updateUser');
            newSocket.off('updateStatus');
            newSocket.disconnect();
        };
    }, [user?.id, token]);

    const value = useMemo(
        () => ({
            socket,
            socketError,
            setSocketError,
        }),
        [socket, socketError, setSocketError]
    );

    return (
        <SocketContext.Provider value={value}>
            {props.children}
        </SocketContext.Provider>
    );
}

export const useSocketContext = () => useContext(SocketContext);
