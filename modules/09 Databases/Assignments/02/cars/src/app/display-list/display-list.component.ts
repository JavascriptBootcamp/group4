import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit,OnChanges {
  @Input() displayObj:{selectedValue:string,data:any};
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){

    console.log(changes.displayObj.currentValue)
  }


}
