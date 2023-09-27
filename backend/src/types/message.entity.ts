import { Channel } from '@prisma/client';

export interface Message {
    id: number;
    content: string;
    createdAt: Date;
    authorId: number;
    targetId?: number;
    senderName: string;
    sent: boolean;
    channel?: Channel;
}
