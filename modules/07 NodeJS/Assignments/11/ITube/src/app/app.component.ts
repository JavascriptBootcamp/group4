import { Component, OnInit } from '@angular/core';
import { Video } from "./Video";
import { VideoService } from "./services/video.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ITube';
  playVideo: Video;

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
      this.videoService.loadVideo();
  }


videoToPlayer(video: Video){
  this.playVideo = video;
}

changeSort(valueSort:any){
  this.videoService.sortVideos(valueSort.target.value);
}

  }

