import { Channel, User } from './inferfaceList';

export interface ConversationInformation {
    isChannel: boolean;
    isUser: boolean;
    user?: User | undefined;
    channel?: Channel | undefined;
}
