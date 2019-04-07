import { Component, Input } from '@angular/core';
import {img} from '../pic.model';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent  {
  @Input() image: img;
}
