import { t_event } from './message.entity';

export interface MessageInfo {
    content: string;
    target: string;
    ToUser: boolean;
    event: t_event;
}
