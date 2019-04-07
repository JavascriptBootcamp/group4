import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.css']
})
export class BigPictureComponent implements OnInit {
  @Input() passedImage:string;
  constructor() {
  }

  ngOnInit() {
  }

}
