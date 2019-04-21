import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.css']
})
export class BigPictureComponent {
  @Input() passedImage:string;
  @Input() show:boolean;
  @Output() showChanged = new EventEmitter();
  hideBigScreen(){
    this.show = false;
    this.showChanged.emit(this.show);
  }
}
