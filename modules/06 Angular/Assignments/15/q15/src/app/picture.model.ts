import { Author } from './author.model';
export interface Picture{
    id: number,
    author: Author;
    imgSrc: string,
    likeCounter: number
}