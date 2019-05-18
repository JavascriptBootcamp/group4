import { Question } from './question.model';

export interface Quiz {
    time: number;
    quizIndex: number;
    quizName: string;
    started:boolean;
    submmited: boolean;
    score: number;
    questions: Question[];
    currentQuestionIndex: number;
}
