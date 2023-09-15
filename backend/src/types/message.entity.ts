export interface Message {
  id: number;
  content: string;
  createdAt: Date;
  authorId: string;
  targetId: string;
  sent: boolean;
}
