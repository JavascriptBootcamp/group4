import { Component, OnInit , Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit ,OnChanges {

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



  }

}
