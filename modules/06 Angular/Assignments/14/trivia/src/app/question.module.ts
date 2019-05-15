import {Answer} from './answer.module'

export interface Question{
    question_id:number,
    question:string,
    ans:Answer[],
    answerIndex:string
    clicked:boolean,
    isCorrect:boolean
}