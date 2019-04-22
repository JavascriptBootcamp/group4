import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
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
