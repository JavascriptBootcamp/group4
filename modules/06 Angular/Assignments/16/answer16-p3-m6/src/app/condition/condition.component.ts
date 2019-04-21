import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

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
