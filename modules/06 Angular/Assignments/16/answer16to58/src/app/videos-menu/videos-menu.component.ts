import { Component, Input ,Output ,EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-videos-menu',
  templateUrl: './videos-menu.component.html',
  styleUrls: ['./videos-menu.component.css']
})

export class VideosMenuComponent  {
  @Output() clickedVideo = new EventEmitter<Video>();

  videosObjsArr: Video[];

  VIDEOS_NUM_TO_LOAD: number;
  loadedVideosNum: number;
 

  constructor() { 
    this.videosObjsArr = [];
    this.VIDEOS_NUM_TO_LOAD = 10;
    this.loadedVideosNum = 0;

    this.loadVideos();
  }


  loadVideos() {
    for (let i: number = 1; i <= this.VIDEOS_NUM_TO_LOAD; i++) {
      this.loadVideo();
    }
  }

  loadVideo() {
    fetch("https://random.dog/woof.json")
      .then(response => {
          response.json()
      .then(data => {
          if (data.url.indexOf(".mp4") > -1) this.addVideo(data.url);
          else this.loadVideo();    
      })
      })
      .catch( error => {
          console.log(error);
      })
  }
  

  addVideo(url: string) {
    this.loadedVideosNum++;

    this.videosObjsArr.push(
      new Video(
        "Video Title: " + `Video ${this.loadedVideosNum}`, 
        "Artist Name: " + `Artist of video ${this.loadedVideosNum}`,
        "Description: " + `Description of video ${this.loadedVideosNum}`,  url, 
        "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png"
      )
    );
  }


  onclickMenuVideo(videoObj: Video) {
    this.clickedVideo.emit(videoObj);  // videoObj - video object of clicked video
  }
}