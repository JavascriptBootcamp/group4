import { Component ,OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../video.model';
// import { Video } from '../video.model';
// import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.css']
})
export class VideosContainerComponent implements OnInit{
  @Output() playThisVideoEvent=new EventEmitter<Video>();
  videos: Video[];
  constructor() {
    this.videos =[];
  }

  ngOnInit(){
    for(let i=0;i<20;i++){
      this.loadFakeVideos(i);
    }
  }

  loadFakeVideos(num:number) {
    fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
        if (data.url.indexOf(".mp4") > -1){
          this.videos.push(this.createFakeVideo(data.url,num));
          if(this.videos.length===1){
              this.playThisVideo(this.videos[0]);
          }
        }
        else {
          this.loadFakeVideos(num);
        }
    })
}
createFakeVideo(url,num){
  let video:Video ={
    videoSrc:url,
    img:'',
    title:'Video ' + num,
    creator:"Artist " + num,
    description:"very nice video " + num,
    isClicked:false
  }
  return video;
}
playThisVideo(videoToPlay){
  this.playThisVideoEvent.emit(videoToPlay);
}


}
