import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sml-picture',
  templateUrl: './sml-picture.component.html',
  styleUrls: ['./sml-picture.component.css']
})
export class SmlPictureComponent  {
  @Input() src:string;
  @Input() author:string;
  @Output() showOnBigPicture = new EventEmitter<string>();
  @Input() likesAmount:number;
  clicked:boolean;
  // activatedRoute: ActivatedRoute;
  constructor() {
    this.clicked=false;
  }
  addlike(){
    this.likesAmount++;
  }
  imgClicked(){
    this.showOnBigPicture.emit(this.src);
  }
}
