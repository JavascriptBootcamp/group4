import { Component, Input } from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent{
  @Input() currentVideo:Video;
}
