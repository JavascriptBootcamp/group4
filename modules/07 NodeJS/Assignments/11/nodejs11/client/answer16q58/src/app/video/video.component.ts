import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() video: Video;
  @Output() playVideoEvent = new EventEmitter<Video>();
  constructor() { }

  ngOnInit() {
  }

  playVideo(){
    this.playVideoEvent.emit(this.video);
  }
}
