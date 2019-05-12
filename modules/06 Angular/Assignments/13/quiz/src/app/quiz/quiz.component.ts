import { Component,OnInit } from '@angular/core';
import {Question} from '../question.module';
import {QuizService} from '../quiz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions:Question[];
  isCorrect:boolean;
  countOfCorrectAnswers:number
  constructor(private quizService:QuizService,private router:Router) { 
    this.questions = [];
    this.isCorrect = false;
    this.countOfCorrectAnswers=0;
  }

  getClass(i,j){
    if((this.questions[i].ans[j].answer_number===this.questions[i].correctAnswer) && this.questions[i].ans[j].clicked)
    return 'correct'
    if((this.questions[i].ans[j].answer_number!==this.questions[i].correctAnswer) && this.questions[i].ans[j].clicked)
    return 'unCorrect';

    return null;
 }

 onChange(q_index,answer_number){
   const ans_index = Number(answer_number)-1;
   this.questions[q_index].ans[ans_index].clicked = !this.questions[q_index].ans[ans_index].clicked;
   this.questions[q_index].clicked = true;
   this.isCorrect = this.quizService.isCorrect(q_index,answer_number);
 }

 onSubmit(){
   this.countOfCorrectAnswers = this.quizService.getCorrectAnswers();
   this.router.navigateByUrl('/result/'+ this.countOfCorrectAnswers);
 }
 
 ngOnInit() {

   this.questions = this.quizService.getQuestions;

  }

}
