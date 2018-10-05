import { Vote } from '../model/vote';

export class Comment {
    content: string;
    vote: Vote[];
    username: string;
}