import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {


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
