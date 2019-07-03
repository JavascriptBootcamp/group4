import { Component, OnInit } from '@angular/core';
import { Video } from './video.model';
import { Picture } from './picture.model';
import { FetchService } from './fetch.service';
import { get } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  videos: Video[];
  pictures: Picture[];
  selectedVideo: Video;
  selectedPicture: Picture;
  url: string;

  constructor(private fetchService: FetchService) {

    this.selectedVideo = null;
    this.url = "http://localhost:5000/songs";

    this.pictures = [
      { title: "Apologize", artist: "OneRepublic", picture: "assets/pictures/pic1.JPG" },
      { title: "Here Without You", artist: "3 Doors Down", picture: "assets/pictures/pic2.JPG" },
      { title: "It's Over", artist: "Level 42", picture: "assets/pictures/pic3.JPG" }
    ]
  }

  ngOnInit() {
    this.myFetch();
  }

  async myFetch() {
    const f = await fetch(this.url);
    const data = await f.json();
    this.videos = data;
    this.selectedVideo = this.videos[0];
    console.log("data is : ", data);
  }

  openMainVideo(pic: Picture) {
    this.selectedPicture = pic;

    for (let index = 0; index < this.videos.length; index++) {
      if (pic.title === this.videos[index].title && pic.artist === this.videos[index].artist) {
        this.selectedVideo = this.videos[index]
      }

    }
  }
}
