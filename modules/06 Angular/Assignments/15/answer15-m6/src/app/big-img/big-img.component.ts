import { Component, OnInit, Input} from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-big-img',
  templateUrl: './big-img.component.html',
  styleUrls: ['./big-img.component.css']
})
export class BigImgComponent implements OnInit{
  @Input() bigImg:string;
  zoom:boolean;
  constructor(private imageService:ImagesService) {

   }

  ngOnInit() {

  }

  hideImg() {
    this.imageService.hideImg.emit();
  }


}
