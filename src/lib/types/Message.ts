export type Message = {
    id: number;
    senderId: number;
    recieverId: number;
    content: string;
}

export type UserMessages = {
    userId: number;
    messages: Message[];
}