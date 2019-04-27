import { Component, OnInit, Input } from '@angular/core';
import { video } from '../menu/video.module';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent  {
  @Input() inVideo: video;
  //test: string;


  // ngOnInit() {
  //   console.log(this.inVideo);
  // }

}
