import { Message } from "./message.entity";
export interface ServerToClientEvents {
    message: (payload: Message) => void;
}
