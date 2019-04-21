import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

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
