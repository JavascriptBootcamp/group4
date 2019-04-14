import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})
export class CollapsableComponent{
@Input() isAllOpen: boolean;
@Input() display: string;
collapse: boolean;
  constructor() { 
    this.collapse = false;
  }

  toggle(){
    if(this.isAllOpen !== this.collapse)
    {
      this.collapse = this.isAllOpen;
    }
    this.collapse = !this.collapse;
  }

}
