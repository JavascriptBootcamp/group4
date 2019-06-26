import { Injectable } from '@angular/core';
import { IVideo } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  videos: IVideo[];
  url: string

  constructor() {
    this.videos = [];
    this.url = "http://localhost:5000";
  }

  async initVideos() {
    const videos = await this.getVideosFromServer();
    this.addVideos(videos);
  }

  getVideosFromServer(): Promise<IVideo> {
    return fetch(`${this.url}/songs`)
      .then(response => response.json())
  }

  addVideos(videos): void {
    for (const video of videos) {
      this.videos.push({ id: video.id, title: video.title, artist: video.artist, description: video.words, videoSrc: video.videoSrc, imgSrc: video.imgSrc });
    }
  }
}
