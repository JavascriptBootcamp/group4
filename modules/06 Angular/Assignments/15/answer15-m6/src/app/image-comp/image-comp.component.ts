import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-image-comp',
  templateUrl: './image-comp.component.html',
  styleUrls: ['./image-comp.component.css']
})
export class ImageCompComponent implements OnInit {

  @Input() myImg;

  clicked = false;
 
 
    
  constructor() { }

  ngOnInit() {

  }

  onClickLike(e, likeClick){
    this.myImg.like++;
  }

  addBorder(){
    this.clicked = !this.clicked;
  }

}
