import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-including',
  templateUrl: './search-including.component.html',
  styleUrls: ['./search-including.component.css']
})
export class SearchIncludingComponent implements OnInit {

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
