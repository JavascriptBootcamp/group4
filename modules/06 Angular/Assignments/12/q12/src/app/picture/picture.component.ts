import { Component, Input } from '@angular/core';
import { Picture } from '../picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  @Input() picture: Picture;
  constructor() { 
  }

}
