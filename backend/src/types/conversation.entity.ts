import { Message } from './message.entity';

export interface Conversation {
    channel: boolean;
    user: boolean;
    name: string;
    picture?: string;
    lastMessage?: Message;
}
