import { Component, OnInit } from '@angular/core';
export interface Video {
  id: string;
  title: string;
  singer: string;
  url: string;
  words: string;
  image: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  thumbnails: Video[];
  player: Video;
  dataStorge: Video;
  constructor() {
    this.player = null;
  }
  ngOnInit() {
    this.dataStorge = JSON.parse(localStorage.getItem("Itube"));
    // if (this.dataStorge) {
    //   this.player =
    //     {
    //       id: this.dataStorge.id,
    //       title: this.dataStorge.title,
    //       singer: this.dataStorge.singer,
    //       url: this.dataStorge.url,
    //       words: this.dataStorge.words,
    //       image: this.dataStorge.image
    //     }
    // }
    fetch("http://localhost:8000/songs").then(res => res.json()).then(data => this.thumbnails = data);
  }
  onAddClickVideoEvent(video: Video) {
    this.player =
      {
        id: video.id,
        title: video.title,
        singer: video.singer,
        url: video.url,
        words: video.words,
        image: video.image
      }
    // localStorage.setItem("Itube", JSON.stringify(this.player));
  }
}
