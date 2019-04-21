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



  }

  ngOnChanges() {

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
