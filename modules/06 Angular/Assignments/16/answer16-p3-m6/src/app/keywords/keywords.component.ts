import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit, OnChanges {


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
