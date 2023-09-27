import { Message } from './message.entity';

export interface ContactType {
    channel: boolean;
    user: boolean;
    name: string;
	status: string;
    picture?: string;
    lastMessage?: Message;
}
