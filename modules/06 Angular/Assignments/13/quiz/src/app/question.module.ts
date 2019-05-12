import {Answer} from './answer.module'

export interface Question{
    question_id:number,
    question:string,
    ans:Answer[],
    correctAnswer:string,
    clicked:boolean,
    isCorrect:boolean
}