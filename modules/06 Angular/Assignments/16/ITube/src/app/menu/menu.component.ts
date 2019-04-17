import { Component, OnInit , Input ,Output ,EventEmitter } from '@angular/core';
import { Video } from '../Video';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Input() video:Video;
@Output() videoClicked=new EventEmitter<Video>();
  constructor() {
    // console.log(video.title);
   }

  ngOnInit() {
  }

  clickVideo(){
    this.videoClicked.emit(this.video);
  }
}
