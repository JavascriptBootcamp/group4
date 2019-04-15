import { Component, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})

export class CollapsableComponent implements OnInit {
  @Input() display: string;
  @Input() isOpen: boolean;
  constructor() {
   
  }
  ngOnInit() {

  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
