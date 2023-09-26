export interface Message {
    id: number;
    content: string;
    createdAt: Date;
    autorId: number;
    targetId?: number;
    senderName: string;
    sent: boolean;
}
