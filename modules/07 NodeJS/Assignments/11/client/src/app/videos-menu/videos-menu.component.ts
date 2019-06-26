import { Component, Input ,Output ,EventEmitter } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-videos-menu',
  templateUrl: './videos-menu.component.html',
  styleUrls: ['./videos-menu.component.css']
})

export class VideosMenuComponent  {
  //@Output() clickedVideo = new EventEmitter<Video>();

  videosObjsArr: Video[];
  VIDEOS_NUM_TO_LOAD: number;
  loadedVideosNum: number;
  serverUrl: string;


  constructor(private _videoServiceObj: VideoService) {
    this.videosObjsArr = [];
    this.VIDEOS_NUM_TO_LOAD = 5;
    this.loadedVideosNum = 0;
    this.serverUrl = 'http://localhost:5000/loadSongs';
    this.loadVideos();
  }

 
  loadVideos() {
      fetch(this.serverUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      .then(data =>{
        this.fillVideosObjsArr(data);
      });
  }


  fillVideosObjsArr(videosData) {
    this._videoServiceObj.videosObjsArr = videosData;
    this.videosObjsArr = videosData;
  }


  onclickMenuVideo(videoObj: Video) {
    this._videoServiceObj.clickedVideo = videoObj;
    this._videoServiceObj.sendClickedVideo(videoObj);
  }
}
