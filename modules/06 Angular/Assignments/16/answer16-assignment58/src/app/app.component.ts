import { Component } from '@angular/core';
import { Video } from './video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentVideo:Video;
  moveVideoToPlayer(video){
    this.currentVideo=video;
  }
}
