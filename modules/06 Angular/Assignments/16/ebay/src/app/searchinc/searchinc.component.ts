import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchinc',
  templateUrl: './searchinc.component.html',
  styleUrls: ['./searchinc.component.css']
})
export class SearchincComponent implements OnInit {
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
