import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @Input() clickedVideo: Video;

  @Input() videoSrc: string;
  @Input() videoTitle: string;
  @Input() videoArtistName: string;
  @Input() videoDescription: string;

  constructor() { }

  playVideo(event) {
    console.log(event+"ffff");
  }
}