export interface Message {
  id: string;
  content: string;
  createdAt: Date;
  autorId: number;
  targetId?: number;
  senderName: string;
  sent: boolean;
}
