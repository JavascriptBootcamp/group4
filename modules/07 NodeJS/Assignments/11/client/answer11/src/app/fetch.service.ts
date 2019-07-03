import { Injectable, OnInit } from '@angular/core';
import { Video } from './video.model';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FetchService implements OnInit {

  videos: Video[];
  url: string;

  constructor() {}

  ngOnInit() {
    this.url = "http://localhost:5000/songs";
    const fetchAwait = async () => {
      await fetch(this.url)
        .then(res => res.json())
        .then(data => {
          this.videos = data.videos;
          console.log("data is : ", data.videos)
        });
    }
  }

  get getVideos(): Video[]{
    console.log(this.videos);
    
    return this.videos;
  }
}
