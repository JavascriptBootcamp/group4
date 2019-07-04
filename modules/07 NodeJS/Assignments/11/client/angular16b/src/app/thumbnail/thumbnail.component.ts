import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../app.component';
@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() video: Video;
  @Output() clickVideoEvent = new EventEmitter<Video>();
  constructor() { }

  ngOnInit() {
  }
  playVideo() {
    this.clickVideoEvent.emit(this.video);
  }
}
