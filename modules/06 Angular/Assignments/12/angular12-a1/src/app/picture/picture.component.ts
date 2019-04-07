import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  constructor() { }
  @Input() img: Image;
  
  ngOnInit() {
  }

}
