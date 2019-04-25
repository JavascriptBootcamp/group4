import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-videos-menu',
  templateUrl: './videos-menu.component.html',
  styleUrls: ['./videos-menu.component.css']
})
export class VideosMenuComponent implements OnInit {
  @Input() video: Video;
  @Output() videoPlayer = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  clickVideo() {
    this.videoPlayer.emit(this.video);
  }
}
