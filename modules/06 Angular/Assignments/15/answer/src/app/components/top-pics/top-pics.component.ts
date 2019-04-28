import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-pics',
  templateUrl: './top-pics.component.html',
  styleUrls: ['./top-pics.component.css']
})
export class TopPicsComponent implements OnInit {

  @Input() topPicSrcs: string[];
  @Output() showImgEvent = new EventEmitter<string>();
  toggle:boolean;

  constructor() { 
    this.toggle = false;
  }

  ngOnInit() {
  }

  toggleUl() {
    this.toggle= !this.toggle;
  }

  showImg(e) {
    let src:string = e.target.src;
    this.showImgEvent.emit(src);
  }

}
