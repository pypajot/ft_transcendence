import { Channel } from './inferfaceList';

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
