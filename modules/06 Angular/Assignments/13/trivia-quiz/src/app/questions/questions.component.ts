import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";
import { TrivaQuestion } from "../triva.model";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  correctAnswers = 0;
  answers: boolean[] = [];
  questions: TrivaQuestion[];
  submited = false;

  constructor(private questionsService: QuestionsService) {

  }
  myClick() {
  }
  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
  }

  fun(input, correctAnswer, i:number) {
    if (input.value === correctAnswer) {
      this.answers[i] = true;
    } else this.answers[i] = false;
  }

  onSubmit(ev) {
    //ev.preventDefault();
    this.answers.forEach( (item)=>{
      if(item) {
         this.correctAnswers++;
      }
    })
    this.submited = true;
  }

}
