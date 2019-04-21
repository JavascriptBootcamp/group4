import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-buying-formats',
  templateUrl: './buying-formats.component.html',
  styleUrls: ['./buying-formats.component.css']
})
export class BuyingFormatsComponent implements OnInit ,OnChanges{

  sign = '-';
  @Input() hideToggle: boolean;

  ngOnChanges() {

    if (this.hideToggle){
      this.sign = '+';
     } else {
       this.sign = '-';
     }



  }


  constructor() { }

  ngOnInit() {

  }


  toggleHide() {

    this.hideToggle = !this.hideToggle;




  }

}
