import { Component, Input, OnInit } from '@angular/core';
import {Video} from '../video.model';
@Component({
  selector: 'app-big-img',
  templateUrl: './big-img.component.html',
  styleUrls: ['./big-img.component.css']
})
export class BigImgComponent implements OnInit {
 @Input() videoIns:Video;
  constructor() { 
    this.videoIns=new Video("","","","","");
  
  }

  ngOnInit() {
  }


}
