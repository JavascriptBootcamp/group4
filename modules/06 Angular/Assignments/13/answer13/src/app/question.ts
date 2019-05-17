export class Question {
    ID:string;
    question:string;
    answers:string[];
    correctAnswerIndex:number;
    constructor(ID,question,answers,correctAnswerIndex){
        this.ID=ID;
        this.question=question;
        this.answers=answers;
        this.correctAnswerIndex=correctAnswerIndex;
    }
}
