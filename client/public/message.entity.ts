export interface Message{
    id: string;
    content: string;
    createdAt: Date;
    autorSocketId: string;
    targetSocketId: string;
    sent: boolean;
}