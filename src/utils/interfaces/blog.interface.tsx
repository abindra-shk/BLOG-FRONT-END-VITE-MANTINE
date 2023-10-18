export interface BlogInterface {
    _id: string;
    title: string;
    content: string;
    user: {
        _id: string;
        username: string;
    };
    status: number;
    blogtypes: string[]; // Assuming blogtypes are represented as an array of strings (IDs)
    createdAt: Date; // Represented as a Date object
    updatedAt: Date; // Represented as a Date object
}