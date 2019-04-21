import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnChanges {


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
