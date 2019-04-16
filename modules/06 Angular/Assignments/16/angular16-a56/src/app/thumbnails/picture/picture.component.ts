import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/image.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() img: Image;
  @Input() selected: number;
  @Output() imgClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    
  }

  clickedImg(element) {
    element.target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    this.imgClicked.emit(element.target);
  }
}
