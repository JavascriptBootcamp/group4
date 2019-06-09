import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  template: `<img [src]="inactive ? content : 'https://static1.squarespace.com/static/5abd8db4620b85fa99f15131/5abe558a03ce64a18962e2c0/5bedaf8dc2241be839940725/1543721484157/Card+Backs+2.0+-+Bridge+-++Blue_shw.png?format=500w'" [ngStyle]="{'width': '75px', 'height': '100px', 'cursor': inactive ? 'no-drop': 'pointer', 'transform': 'rotate(' + randomAngle + 'deg)'}">
  `
})
export class PictureComponent implements OnInit {
  @Input() inactive: boolean;
  @Input() content: string;
  randomAngle: number;
  constructor() { }

  ngOnInit() {
    this.randomAngle = Math.random() * 180;
  }

}
