import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TriviaService} from '../trivia.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  correctAnswersCount:number;
  constructor(private activatedRoute:ActivatedRoute,private triviaService:TriviaService,private router:Router) { 
    this.activatedRoute = activatedRoute;
    this.correctAnswersCount = this.activatedRoute.snapshot.params.correctAnswersCount;
  }

  newGame(){

    this.triviaService.clearData();
    this.router.navigateByUrl('/quiz');
  }

  ngOnInit() {
  }

}
