import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() img: Image;

  constructor() { }
  
  ngOnInit() {
  }

}
