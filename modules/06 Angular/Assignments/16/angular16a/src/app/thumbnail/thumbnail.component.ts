import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {thumbnail} from '../app.component';
@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() image : thumbnail;
  @Output() addPicEvent = new EventEmitter<thumbnail>();
  constructor() { }

  ngOnInit() {
  }
  displayPic(){
    this.addPicEvent.emit(this.image);
  }

}
