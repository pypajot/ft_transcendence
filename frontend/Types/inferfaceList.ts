export interface Moderation {
    id: number;
    type: string;
    target: User;
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

export interface User {
    id: number;
    username: string;
    avatar: string;
    socketId?: string;
    blocked?: number[];
    twoFactorAuthActive: boolean;
}

export interface AuthContextData {
    user: User | null;
    setUser: (user: User | null) => void;
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    logout: () => void;
    refreshFetch: (address: any, params?: any) => any;
}
