import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  sign = '-';
  @Input() hideToggle: boolean;

  constructor() { }

  ngOnInit() {

    if (this.hideToggle){
      this.sign = '+';
     } else {
       this.sign = '-';
     }

  }

  toggleHide() {

    this.hideToggle = !this.hideToggle;

    if (this.hideToggle){
     this.sign = '+';
    } else {
      this.sign = '-';
    }

  }


}
