import { type UserMessages } from "$lib/types/Message";
import { writable } from "svelte/store";

export const userMessages = writable<UserMessages>({
    "userId": 1,
    "messages": [
        {
            "id": 1,
            "senderId": 1,
            "recieverId": 2,
            "content": "Hello"
        },
        {
            "id": 2,
            "senderId": 2,
            "recieverId": 1,
            "content": "Hi"
        },
        {
            "id": 3,
            "senderId": 1,
            "recieverId": 2,
            "content": "How are you?"
        },
        {
            "id": 4,
            "senderId": 2,
            "recieverId": 1,
            "content": "I am fine, thank you!"
        },
        {
            "id": 5,
            "senderId": 1,
            "recieverId": 2,
            "content": "What are you doing?"
        },
        {
            "id": 6,
            "senderId": 2,
            "recieverId": 1,
            "content": "Just working on a project."
        },
        {
            "id": 7,
            "senderId": 1,
            "recieverId": 2,
            "content": "Sounds interesting!"
        },
        {
            "id": 8,
            "senderId": 2,
            "recieverId": 1,
            "content": "Yeah, it is!"
        },
        {
            "id": 9,
            "senderId": 1,
            "recieverId": 2,
            "content": "Need any help?"
        },
        {
            "id": 10,
            "senderId": 2,
            "recieverId": 1,
            "content": "Maybe later, thanks!"
        },
        {
            "id": 11,
            "senderId": 1,
            "recieverId": 2,
            "content": "Sure, just let me know."
        },
        {
            "id": 12,
            "senderId": 2,
            "recieverId": 1,
            "content": "Will do!"
        },
        {
            "id": 13,
            "senderId": 1,
            "recieverId": 2,
            "content": "By the way, did you watch the latest episode?"
        },
        {
            "id": 14,
            "senderId": 2,
            "recieverId": 1,
            "content": "Not yet, no spoilers!"
        },
        {
            "id": 15,
            "senderId": 1,
            "recieverId": 2,
            "content": "Haha, okay!"
        },
        {
            "id": 16,
            "senderId": 2,
            "recieverId": 1,
            "content": "Thanks!"
        },
        {
            "id": 17,
            "senderId": 1,
            "recieverId": 2,
            "content": "What time are you free?"
        },
        {
            "id": 18,
            "senderId": 2,
            "recieverId": 1,
            "content": "Around 6 PM."
        },
        {
            "id": 19,
            "senderId": 1,
            "recieverId": 2,
            "content": "Great, let's catch up then."
        },
        {
            "id": 20,
            "senderId": 2,
            "recieverId": 1,
            "content": "Sounds good!"
        },
        {
            "id": 21,
            "senderId": 1,
            "recieverId": 2,
            "content": "See you later."
        },
        {
            "id": 22,
            "senderId": 2,
            "recieverId": 1,
            "content": "See you!"
        },
        {
            "id": 23,
            "senderId": 1,
            "recieverId": 2,
            "content": "Take care."
        },
        {
            "id": 24,
            "senderId": 2,
            "recieverId": 1,
            "content": "You too!"
        },
        {
            "id": 25,
            "senderId": 1,
            "recieverId": 2,
            "content": "Goodbye!"
        },
        {
            "id": 26,
            "senderId": 2,
            "recieverId": 1,
            "content": "Bye!"
        },
        {
            "id": 27,
            "senderId": 1,
            "recieverId": 2,
            "content": "Talk soon."
        },
        {
            "id": 28,
            "senderId": 2,
            "recieverId": 1,
            "content": "Definitely!"
        },
        {
            "id": 29,
            "senderId": 1,
            "recieverId": 2,
            "content": "Have a nice day!"
        },
        {
            "id": 30,
            "senderId": 2,
            "recieverId": 1,
            "content": "Thanks, you too!"
        }
    ]
}
)