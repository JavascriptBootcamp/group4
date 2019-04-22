import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-format',
  templateUrl: './buy-format.component.html',
  styleUrls: ['./buy-format.component.css']
})
export class BuyFormatComponent implements OnInit {
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
