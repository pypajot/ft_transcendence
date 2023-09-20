export interface Message{
    id: number;
    content: string;
    createdAt: Date;
    authorSocketId: string;
    targetSocketId: string;
    sent: boolean;
    }