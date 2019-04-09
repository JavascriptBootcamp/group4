import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-img',
  templateUrl: './main-img.component.html',
  styleUrls: ['./main-img.component.css']
})
export class MainImgComponent implements OnInit {
  @Input() img: string;
  @Output() replaceImg = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  preOrNext(sign:number) {
    this.replaceImg.emit(sign);
  }

}
