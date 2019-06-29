import { Component, OnInit } from '@angular/core';
import { Video } from './video.model';
import { Player } from './player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  videos: Video[];
  player: Player;
  constructor() {
    this.videos = [];
  }
  ngOnInit() {
    fetch("http://localhost:8000/songs")
      .then(res => res.json())
      .then(data => { if (data) { this.videos = data } });
  }

  playVideoEvent(video: Video) {
    this.player = new Player(video.title, video.singer, video.words, video.videoSrc);
  }
}
