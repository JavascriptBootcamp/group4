import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})

export class CollapsableComponent implements OnInit {
  @Input() display: string;
  @Input() exp: boolean;
  collapse: boolean;
  constructor() {
    this.collapse = true;
  }
  ngOnInit() {

  }
  toggle() {
    this.collapse = !this.collapse;
    this.exp = !this.exp;
  }
}
