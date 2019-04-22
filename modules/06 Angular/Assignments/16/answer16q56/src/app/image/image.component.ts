import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() src: string;
  @Output() changeMainPicEvent = new EventEmitter<string>();
  constructor() { }

  changeMainPic() {
    this.changeMainPicEvent.emit(this.src);
  }

  ngOnInit() {
  }

}
