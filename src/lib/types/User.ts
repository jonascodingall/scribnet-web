export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: 'online' | 'offline' | 'away';
}
  