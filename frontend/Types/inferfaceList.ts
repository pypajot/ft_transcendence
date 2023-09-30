export interface Moderation {
    id: number;
    type: string;
    targetId: number;
    ChannelName: string;
}

export interface Channel {
    id: number;
    members: User[];
    name: string;
    owner: number;
    admins: number[];
    invited: number[];
    picture?: string;
    info: Moderation[];
}

export interface ErrorType {
    noSuchChannelName: boolean;
    wrongPrivileges: boolean;
    wrongPassword: boolean;
    alreadyUsedChannelName: boolean;
    Banned: boolean;
}
export interface Friend {
    id: number;
    username: string;
    avatar: string;
    status: string;
}

export interface User {
    id: number;
    username: string;
    avatar: string;
    socketId?: string;
    twoFactorAuthActive: boolean;
    friends: User[];
    friendsRequest: Friend[];
    blocked: number[];
	status: string;
}
