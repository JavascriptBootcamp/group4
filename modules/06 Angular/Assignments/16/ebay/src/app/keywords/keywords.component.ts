import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {
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
