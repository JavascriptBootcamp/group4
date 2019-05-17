import { Question } from './question.model';

export interface Quiz {
    quizIndex: number;
    quizName: string;
    started:boolean;
    submmited: boolean;
    score: number;
    questions: Question[];
    currentQuestionIndex: number;
}
