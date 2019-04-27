import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { video } from './video.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() passedVideo = new EventEmitter<video>();
  videos: video[];
  constructor() {
    this.videos = [];
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.videoFetcher(i);
    }
  }


  videoFetcher(index) {
    fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
      if (data.url.indexOf(".mp4") > -1) {
        this.videos.push({
          video: data.url,
          title: "Title " + index,
          artist: "Artist " + index,
          description: "Description of video " + index
        })
      }
      else{
        this.videoFetcher(index)
      }
    })
  }

  passVideo(video: video){
    console.log(video)
    this.passedVideo.emit(video);
    
  }
}


