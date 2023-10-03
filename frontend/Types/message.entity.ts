import { Channel } from './inferfaceList';

export enum t_event {
    JOIN,
    LEAVE,
    MUTED,
    BANED,
    KICK,
}

export interface Message {
    id: number;
    content: string;
    createdAt: Date;
    authorId: number;
    targetId?: number;
    senderName: string;
    sent: boolean;
    channel?: Channel;
    event: t_event | undefined;
}
