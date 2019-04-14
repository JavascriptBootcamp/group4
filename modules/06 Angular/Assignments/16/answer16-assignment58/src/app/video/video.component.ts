import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent{
  @Input() video:Video;
  @Output() videoHasClickedEvent=new EventEmitter<Video>();

  videoHasClicked(){
    console.log(this.video.isClicked);
    this.video.isClicked=true;
    this.videoHasClickedEvent.emit(this.video);
    console.log(this.video.isClicked);
  }

}
