import { Component, OnInit } from '@angular/core';
import { Video } from './video.model';
import {Player} from './player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  videos: Video[];
  player: Player;
  constructor(){
    this.videos = [];
  }
  ngOnInit() {
    for (var i = 1; i <= 10; i++) {
      this.loadVideo()
    }
  }

loadVideo(): void {
  fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
    if (data.url.indexOf(".mp4") > -1) {
      this.addVideo(data.url)
    }
    else {
      this.loadVideo();
    }
  })
}

addVideo(url:string) {
  this.videos.push(new Video("title" , "name", "description", url, "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png"));
}

playVideoEvent(video:Video){
  this.player = new Player(video.title, video.artistName, video.description, video.videoSrc);
}
}
