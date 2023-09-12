export interface Message{
    id: String;
    content: string;
    createdAt: Date;
    autorSocketId: String;
    targetSocketId: String;
    sent: boolean;
}