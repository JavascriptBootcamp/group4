import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IVideo } from 'src/app/models/video.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input() video: IVideo;
  @Output() videoToPlay = new EventEmitter<IVideo>();

  constructor() { }
  
  clickVideo() {
    this.videoToPlay.emit(this.video);
  }
}
