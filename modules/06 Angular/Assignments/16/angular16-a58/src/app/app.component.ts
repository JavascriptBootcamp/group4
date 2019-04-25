import { Component, OnInit } from '@angular/core';
import { Video } from './video.model';
import { videos } from './videos';
import { VideosGAService } from './videos-g-a.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ITube';
  videos: Video[];
  playerVideo: Video;

  constructor(private videoService: VideosGAService) {
    this.videos = videos;
    this.playerVideo = new Video("Video Title", "Artist Name", "Description", "", "");
  }

  ngOnInit(): void {
    this.videoService.init();
  }

  videoPlayer(video: Video) {
    this.playerVideo = video;
  }
}
