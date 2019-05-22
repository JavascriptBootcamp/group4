import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";
import { TrivaQuestion } from "../triva.model";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  questions: TrivaQuestion[];
  correctAnswers = 0;
  submited = false;
  numQuestions  = 0;
  constructor(private questionsService: QuestionsService,
    private route: ActivatedRoute,private router: Router) {

  }
  myClick() {
  }

  nextQuestions()  {
    if(  this.numQuestions < this.questions.length){
      console.log(this.numQuestions,this.questions.length);
      this.numQuestions++;
      this.router.navigate([`/questions/${this.numQuestions}`]);
    }



  }
  backQuestions() {
    if(this.numQuestions > 1)
    this.numQuestions--;
    this.router.navigate([`/questions/${this.numQuestions}`]);


  }
  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
    this.correctAnswers = this.questionsService.correctAnswers;

    this.numQuestions = Number(this.route.snapshot.params.id);


     this.route.params.subscribe ((params:Params) => {
      this.numQuestions = Number(params.id);
    })


  }

  onSubmit(ev) {
    ev.preventDefault();
    this.questionsService.answers.forEach( (item)=>{
      if(item) {
        this.questionsService.correctAnswers++;
      }
    })
    this.router.navigate(['/answers']);
    this.submited = true;
  }
  ngDoCheck(){
    this.correctAnswers = this.questionsService.correctAnswers ;
  }




}
