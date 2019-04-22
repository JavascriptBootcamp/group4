import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {
  @Input() toggle: boolean;
  plusMin: string;
  constructor() {
  }

  ngOnInit() {
   
  }
  ngOnChanges() {
    if (this.toggle){
      this.plusMin = '-';
      }
      else
        this.plusMin = '+';
  }
  toggle_clicked(){
    this.toggle=!this.toggle;
    this.ngOnChanges();
  }

}
