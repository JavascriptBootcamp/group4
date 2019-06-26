import { Injectable } from '@angular/core';
import { Video } from "../Video";
import { videos } from "../Video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videos: Video[];

  constructor() {
    this.videos = videos;
   }

  loadVideo() {
    fetch("http://localhost:5000/songs").then(response => response.json())
      .then(data => {
        this.videos=data;
        console.log(data);
      })
}
sortVideos(valueSort:string) {
  console.log(valueSort);
  fetch("http://localhost:5000/songs?sort="+valueSort)
  .then(response => response.json())
    .then(data => {
      this.videos=data;
      console.log(data);
    })
  }

}
