import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { IVideo } from 'src/app/models/video.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  title: string;
  videoPlay: IVideo;

  constructor(public playerService: PlayerService) {
    this.title = "ITube";
    this.videoPlay = null;
  }

  ngOnInit() {
    this.initVideos();
  }

  async initVideos() {
    await this.playerService.initVideos();
    this.videoPlay = this.playerService.videos[0];
  }

  videoToPlay(video: IVideo) {
    this.videoPlay = video;
  }

}
