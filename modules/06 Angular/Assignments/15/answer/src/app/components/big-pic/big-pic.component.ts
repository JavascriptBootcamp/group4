import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-pic',
  templateUrl: './big-pic.component.html',
  styleUrls: ['./big-pic.component.css']
})
export class BigPicComponent implements OnInit {
  @Input() src: string;
  @Output() closePicEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closePic() {
    this.closePicEvent.emit();
  }

}
