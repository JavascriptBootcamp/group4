import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
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
