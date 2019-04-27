import { Component, Input } from '@angular/core';
import { video } from './menu/video.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() inVideo: video;
  passedVid: video;
  
  constructor() {
    this.passedVid = {video:"https://random.dog/1b5d7726-f401-4f35-aff5-3ec47f0bf47b.mp4",title:"sdf",artist:"asd",description:"dew"}
   }

  passToPlayer(video: video){
    this.passedVid = video;
    
  }
}
