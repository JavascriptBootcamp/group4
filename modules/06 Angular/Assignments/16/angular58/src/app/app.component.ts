import { Component } from '@angular/core';
import { Video } from './video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular58';
  arrayVideos:Video[];
  videoIns:Video;
  constructor(){
    this.videoIns=new Video("","","","","");

this.arrayVideos=[];
    for (var i=1; i<=10;i++){
      this.loadVideo();
    }

  }

loadVideo(){
  fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
    if (data.url.indexOf(".mp4") > -1){
        this.addVideo(data.url);
    }
    else {
        this.loadVideo();
    }
})

}


addVideo(url){
  let video = new Video("title" , "name" , "description1", url, "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png");
this.arrayVideos.push(video);

}

clickedVideo(event){
  this.videoIns=event;

}
  
}
