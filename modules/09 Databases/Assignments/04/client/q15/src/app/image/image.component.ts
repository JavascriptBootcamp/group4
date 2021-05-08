import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
@Input() imgSrc: string;
clicked: boolean;
  constructor() {
    this.clicked = false;
   }

}
