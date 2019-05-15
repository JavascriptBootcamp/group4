export class Question {
    ID:number;
    question: string;
    answers: string[];
    correctAnswerIndex:number;
    userWasCorrect: boolean;
    userAnswer: number;
    constructor(index,question,answers,correctAnswerIndex){
        this.ID=index;
        this.question = question;
        this.answers = answers;
        this.correctAnswerIndex = correctAnswerIndex;
        this.userWasCorrect = null;
        this.userAnswer = -1;
    }
}
