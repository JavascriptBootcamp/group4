import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {
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
    if (this.hideToggle){
     this.sign = '-';
    } else {
      this.sign = '+';
    }
    this.hideToggle = !this.hideToggle;
  }


}
