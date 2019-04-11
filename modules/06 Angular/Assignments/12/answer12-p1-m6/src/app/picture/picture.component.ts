import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
 @Input() mypic;
  constructor() { }

  ngOnInit() {
   console.log( this.mypic);
  }

}
