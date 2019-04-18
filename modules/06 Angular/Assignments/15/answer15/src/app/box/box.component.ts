import { Component,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit{
  @Input() src:string;
  @Input() author:string;
  @Output() showOnBigPicture = new EventEmitter<string>();
  likeAmount:number;
  clicked:boolean;
  activatedRoute: ActivatedRoute;

  constructor(activatedRoute:ActivatedRoute) {
    this.likeAmount=0;
    this.clicked=false;
    this.activatedRoute = activatedRoute;
  }
  ngOnInit(){
    // console.log("authorName " + this.activatedRoute.snapshot.paramMap.authorName);
  }
  addlike(){
    this.likeAmount++;
  }
  imgClicked(){
    this.showOnBigPicture.emit(this.src);
  }
}
