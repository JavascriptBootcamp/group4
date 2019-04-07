import { Component,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent{
  @Input() src:string;
  @Output() showOnBigPicture = new EventEmitter<string>();
  likeAmount:number;
  clicked:boolean;
  constructor() {
    this.likeAmount=0;
    this.clicked=false;
  }
  addlike(){
    this.likeAmount++;
  }
  imgClicked(){
    this.showOnBigPicture.emit(this.src);
  }
}
