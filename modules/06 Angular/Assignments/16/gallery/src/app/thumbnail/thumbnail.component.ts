import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
 intervalScroll;
  @Input() img: string;
  constructor() { }

  ngOnInit() {
  }


   scrlThumbnailRight(e: HTMLInputElement) {
  this.intervalScroll =setInterval(function () {
    e.scrollLeft += 1;
  }), 1000;
}

 scrlThumbnailLeft(e: HTMLInputElement) {
this.intervalScroll = setInterval(function () {
    e.scrollLeft -= 1;
  }), 1000;
}

 stopScroll() {
  clearInterval(this.intervalScroll);
}
}
