import { Component ,OnInit} from '@angular/core';
import {Video} from './vidoe.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'itube';
  videosArr : Video[];
  selectedVideo : Video;

  constructor(){
    this.videosArr = [];
    this.selectedVideo = {title:"",artist:"",description:"",videoSrc:"",imgSrc:""};
  }

  OnSelectedVideo(video){

   this.selectedVideo = video;
  }
  
  loadVideo() {
    fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
        if (data.url.indexOf(".mp4") > -1){
          this.addVideo(data.url)
        }
        else {
          this.loadVideo();
        }
    })
}

addVideo(url:string){
  const title:string = "title" + Math.floor(Math.random()*10);
  const artist:string = "artist" + Math.floor(Math.random()*10);
  const description:string = "description" + Math.floor(Math.random()*10);
  const videoSrc:string = url;
  const imgSrc:string = "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png";
  let video:Video = {title, description,artist, videoSrc,imgSrc };
  this.videosArr.push(video);
}
  ngOnInit(){

    for (var i=1; i<=10;i++){
      this.loadVideo()
  }

  }
}
