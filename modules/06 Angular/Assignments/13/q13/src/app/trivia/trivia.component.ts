import { Component, OnInit,ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { QuestionService } from '../questions.service';
import { Question } from '../question.model';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit{
  questions: Question[];
  currentRadioSelection: string;

  @ViewChild('radio1') radio1: ElementRef;
  @ViewChild('radio2') radio2: ElementRef;
  @ViewChild('radio3') radio3: ElementRef;
  @ViewChild('radio4') radio4: ElementRef;

  constructor(private questionService: QuestionService) { 
    this.questions = [];
  }

  clearRadios(){
    this.radio1.nativeElement.checked = false;
    this.radio2.nativeElement.checked = false;
    this.radio3.nativeElement.checked = false;
    this.radio4.nativeElement.checked = false;
  }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    if(this.questionService.getSelection() !== -1)
      this.setCurrentRadioSelection(+this.currentRadioSelection);
  
    //this.startTimer();
  }

  ngAfterViewInit(){
    // this.currentRadioSelection = ''+0;
    // // this.radio1.nativeElement.checked = true;
    // console.log(this.radio1);
  }

  ngOnDestroy(){
  }

  // ngAfterContentChecked(){
  //   this.interval = setInterval(() => {
  //     this.timer--;
  //     if (this.timer === 0)
  //       clearInterval(this.interval);
  //   }, 1000);
  // }

  onSubmit(event, form: NgForm){
    event.preventDefault();
      this.questionService.setCorrectAnswers(0);
      //this.questionService.setAnswers(form);
  }

  onPrevClicked( form: NgForm){
    this.questionService.stopTimer();
    const currentQuestionId = this.questionService.getCurrentQuestionId();
    const questionKey = 'q' + (currentQuestionId+1);
    const name = this.questionService.getName(currentQuestionId);
    const selected = form[questionKey][name];
    const answer =  this.questionService.getAnswerBykey(currentQuestionId,'option'+(+selected+1))
    console.log("selected",selected);
    if(selected!=='-1')
      this.questionService.setAnswer(currentQuestionId,+this.currentRadioSelection,answer);

    this.questionService.setCurrentQuestionId( this.questionService.getCurrentQuestionId()-1);
    console.log("prev",this.questionService.answersIndex,this.questionService.answers);
    this.currentRadioSelection = ''+(-1);
  }

  onNextClicked( form: NgForm){
    this.questionService.stopTimer();
    const currentQuestionId = this.questionService.getCurrentQuestionId();
    const questionKey = 'q' + (currentQuestionId+1);
    const name = this.questionService.getName(currentQuestionId);
    const selected = form[questionKey][name];
    const answer =  this.questionService.getAnswerBykey(currentQuestionId,'option'+(+selected+1));
    this.questionService.setAnswer(currentQuestionId,+this.currentRadioSelection,answer);

    this.questionService.setCurrentQuestionId( this.questionService.getCurrentQuestionId()+1);
    this.currentRadioSelection = ''+(-1);
  }

  setCurrentRadioSelection(currentRadioSelection: number){
    this.currentRadioSelection = '' + currentRadioSelection;
    if(currentRadioSelection === -1)
      return;
    this.clearRadios();
    let currentRadio: ElementRef;
    switch(currentRadioSelection){
      case 0: currentRadio = this.radio1; break;
      case 1: currentRadio = this.radio2; break;
      case 2: currentRadio = this.radio3; break;
      case 3: currentRadio = this.radio4; break;
    }
    currentRadio.nativeElement.checked = true;
    this.questionService.setAnswerIndex(currentRadioSelection);
  }

  onQuestionChange(currentRadioSelection: number){
    this.setCurrentRadioSelection(currentRadioSelection);
  }

}
