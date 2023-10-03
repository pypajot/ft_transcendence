import { Message } from './message.entity';

export interface ContactType {
    channel: boolean;
    user: boolean;
    name: string;
	status?: string;
	id?: number;
    picture?: string;
    lastMessage?: Message;
}
