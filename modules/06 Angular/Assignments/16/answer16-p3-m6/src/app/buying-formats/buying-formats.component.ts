import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buying-formats',
  templateUrl: './buying-formats.component.html',
  styleUrls: ['./buying-formats.component.css']
})
export class BuyingFormatsComponent implements OnInit {

  sign = '-';
  @Input() hideToggle: boolean;

  constructor() { }

  ngOnInit() {

    if (this.hideToggle){
      this.sign = '-';
     } else {
       this.sign = '+';
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
