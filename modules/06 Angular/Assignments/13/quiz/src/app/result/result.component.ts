import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  countOfCorrectAnswers:string;
  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute=activatedRoute;
    this.countOfCorrectAnswers = activatedRoute.snapshot.params.correctAnswers;
  }

  ngOnInit() {
  }

}
