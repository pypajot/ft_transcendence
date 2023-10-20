import { Message } from "./message.entity";

export class Client_elem{
    id: number;
    name: string;
    socket_id: string;
    messages: Message[];
}