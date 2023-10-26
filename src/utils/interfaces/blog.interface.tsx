import {BlogType} from "./blogtype.interface.tsx";

export interface BlogInterface {
    _id: string;
    title: string;
    content: string;
    user: {
        _id: string;
        username: string;
    };
    status: number;
    blogtypes: BlogType[];
    createdAt: Date; // Represented as a Date object
    updatedAt: Date; // Represented as a Date object
}