import { Component, Input, Output , EventEmitter} from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  @Input() video : Video;
  @Output() setMainVideo = new EventEmitter<Video>();

  openInMainArea() {
    this.setMainVideo.emit(this.video);
  }

}
