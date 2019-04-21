import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit , OnChanges {

  sign = '-';
  @Input() hideToggle: boolean;

  constructor() { }

  ngOnInit() {


  }

  ngOnChanges() {

    if (this.hideToggle) {
      this.sign = '+';
     } else {
       this.sign = '-';
     }
    }

  toggleHide() {

    this.hideToggle = !this.hideToggle;

    if (this.hideToggle) {
     this.sign = '+';
    } else {
      this.sign = '-';
    }

  }


}
