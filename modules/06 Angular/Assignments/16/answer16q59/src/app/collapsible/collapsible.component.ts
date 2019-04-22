import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {
  @Input() setColl: string;
  @Input() toggle: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  toggleColl(e: Event) {
    e.preventDefault();
    this.toggle = !this.toggle;
  }
}
