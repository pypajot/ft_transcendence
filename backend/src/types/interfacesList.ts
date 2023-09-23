export interface User {
    id: number;
    username: string;
    avatar: string;
    socketId?: string;
    twoFactorAuthActive: boolean;
}

export interface Channel {
    member: User[];
    name: string;
    picture?: string;
}
