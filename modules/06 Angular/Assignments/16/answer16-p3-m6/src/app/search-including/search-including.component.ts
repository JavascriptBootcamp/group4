import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search-including',
  templateUrl: './search-including.component.html',
  styleUrls: ['./search-including.component.css']
})
export class SearchIncludingComponent implements OnInit , OnChanges {

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
