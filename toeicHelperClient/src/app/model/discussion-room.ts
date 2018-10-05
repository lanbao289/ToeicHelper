import { Comment } from '../model/comment';

export class DiscussionRoom {
    roomID: string;
    name: string;
    post: string;
    comments: Comment[];
    status: string;
    username: string;
    viewusers: string[];
    datePost: Date;
}