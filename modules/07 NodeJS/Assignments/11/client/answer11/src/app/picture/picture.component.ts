import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { Picture } from '../picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  @Input() picture : Picture;

  @Output() setMainVideo = new EventEmitter<Picture>();

  constructor() { }

  openInMainArea() {
    this.setMainVideo.emit(this.picture);
  }


}
