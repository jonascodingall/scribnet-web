import type { User } from '$lib/types/User';
import { writable } from 'svelte/store';

export const authUser = writable<User>({
    id: 1,
    name: 'Jonas Kölker',
    email: 'jonkoe07@gmail.com',
    avatar: 'https://avatar.iran.liara.run/public/48',
    status: 'online'
});

export const selectedUser = writable<User | null>(null);


export const allUsers = writable<Array<User>>([
    {
        id: 2,
        name: 'VI',
        email: 'troungvinygiyen@gmail.com',
        avatar: 'https://avatar.iran.liara.run/public/47',
        status: 'online',
    },
    {
        id: 3,
        name: 'Ahmed',
        email: 'ahmed@gmail.com',
        avatar: 'https://avatar.iran.liara.run/public/46',
        status: 'offline',
    },
    {
        id: 4,
        name: 'Matthew',
        email: 'matthew@gmail.com',
        avatar: 'https://avatar.iran.liara.run/public/45',
        status: 'away',
    }
]);


