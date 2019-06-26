import { Injectable } from '@angular/core';
import { Video } from '../video';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class VideoService {
  videosObjsArr: Video[];
  clickedVideo: Video;

  private _clickedVideoSrc = new Subject<Video>();
  clickedVideo$ = this._clickedVideoSrc.asObservable(); 

  constructor() {
    this.videosObjsArr = [];
    
    this.clickedVideo = {
      "title": "Hakol Letova",
      "singer": "David Lev",
      "words": "Listen to the song",
      "src": "https://www.youtube.com/embed/w2kccPFk-Bs",
      "url": "https://www.youtube.com/watch?v=w2kccPFk-Bs",
      "videoImg": "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png",
      "id": 1
    }; 
  }

  sendClickedVideo(clickedVideo: Video) {
    this._clickedVideoSrc.next(clickedVideo);
  }

  getClickedVideoSrc() {
    return this.clickedVideo.src;
  }
}
