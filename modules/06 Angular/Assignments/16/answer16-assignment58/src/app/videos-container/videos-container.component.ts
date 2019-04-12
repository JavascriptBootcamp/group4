import { Component ,OnInit } from '@angular/core';
// import { Video } from '../video.model';
// import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.css']
})
export class VideosContainerComponent implements OnInit{
  videos: string[];
  constructor() {
    this.videos =[];
  }

  ngOnInit(){
    for(let i=0;i<20;i++){
      this.loadFakeVideos();
    }
  }

  loadFakeVideos() {
    fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
        if (data.url.indexOf(".mp4") > -1){
          this.videos.push(data.url);
        }
        else {
          this.loadFakeVideos();
        }
    })
}

}
