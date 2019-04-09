import { Component, OnInit, Input } from '@angular/core';
import {Video} from '../app.component';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player : Video;
  constructor() { }
    
  ngOnInit() {
  }

}
