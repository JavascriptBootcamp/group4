import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/models/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() video: IVideo;

  constructor() { }
  
}
