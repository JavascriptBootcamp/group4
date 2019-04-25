import { Injectable } from '@angular/core';
import { Video } from "./video.model";
import { videos } from "./videos";

@Injectable({
  providedIn: 'root'
})
export class VideosGAService {

  constructor() { }
  init(): void {
    for (let i: number = 0; i < 10; i++) {
      this.loadVideo();
    }
  }
  private loadVideo(): void {
    fetch("https://random.dog/woof.json")
      .then(response => response.json())
      .then(data => {
        if (data.url.indexOf(".mp4") > -1) {
          this.addVideo(data.url)
        }
        else {
          this.loadVideo();
        }
      })
  }

  private addVideo(url): void {
    videos.push(new Video("title: " + Math.random() * 10, "name: " + Math.random() * 10, "description: ", url, "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png"));
  }
}
