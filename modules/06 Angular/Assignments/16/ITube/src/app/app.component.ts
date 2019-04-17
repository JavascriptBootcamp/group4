import { Component, OnInit } from '@angular/core';
import { Video } from "./Video";
import { videos } from "./Video";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ITube';
  videos: Video[];
  index:number;
  playVideo:Video;

  constructor() {
    this.videos = videos;
    this.index=1;
    this.playVideo=new Video ("","","","");
  }

  ngOnInit() {
    for (let i: number = 1; i <= 10; i++) {
      this.loadVideo();
    }
  }

     loadVideo(){
      fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
        if (data.url.indexOf(".mp4") > -1) {
          console.log(this.index);
          this.addVideo(data.url)
        }
        else {
          this.loadVideo();
        }
      })
    }

     addVideo(url:string) {
     videos.push(new Video("Dog"+this.index, "name" +this.index,  url, "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png"));
     this.index++;
     console.log(videos);
    }

    videoToPlayer(video:Video){
      this.playVideo=video;
    }

  }

