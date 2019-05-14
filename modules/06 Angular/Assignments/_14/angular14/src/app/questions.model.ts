import {answers} from './answers.model';
export interface questions {
    question : string;
    answers : answers;
    correctAnswer : string;
    id : number;
}