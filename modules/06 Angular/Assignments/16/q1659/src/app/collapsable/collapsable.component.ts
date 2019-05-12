import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})
export class CollapsableComponent{
@Input() isOpen: boolean;
@Input() display: string;
  constructor() { 
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}