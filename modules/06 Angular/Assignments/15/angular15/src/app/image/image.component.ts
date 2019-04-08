import { Component, OnInit ,Input , Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image : string;
  @Output() addToOpenModal = new EventEmitter<string>();
  isClicked : boolean;
  numberOfLikes: number;
  constructor() { 
    this.numberOfLikes = 0;
    this.isClicked = false;
  }
  incrementLike() {
    this.numberOfLikes++;
  }
  isActive(){
    this.isClicked = true;
  }
  ngOnInit() {
  }
  openModal(){
    this.addToOpenModal.emit(this.image);
  }

}
