import { Channel } from '@prisma/client';

export enum t_event {
    JOIN,
    SENT,
    RCV,
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
    channel?: Channel;
    event?: t_event;
}
