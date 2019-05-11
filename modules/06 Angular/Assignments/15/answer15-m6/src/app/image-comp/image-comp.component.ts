import { Component, OnInit, Input, OnDestroy, OnChanges } from "@angular/core";
import { Img, ImagesService } from "../images.service";

@Component({
  selector: "app-image-comp",
  templateUrl: "./image-comp.component.html",
  styleUrls: ["./image-comp.component.css"]
})
export class ImageCompComponent implements OnInit, OnDestroy, OnChanges {
  @Input() myImg: Img;
  @Input() imageLikes;
  clicked = false;
  imgToZoom: string;

  constructor(private imageService:ImagesService) {}

  ngOnInit() {}
  ngOnChanges() {
    //console.log("change");
  }
  onClickLike(e) {
    this.myImg.like++;
  }

  addBorder() {
    this.imageService.zoom = true;
    this.clicked = true;
    this.imageService.bigImg = this.myImg.src;
    console.log(this.myImg.src);
  }

  unZoom() {
    this.imageService.zoom = false;
  }
  ngOnDestroy() {
    alert("i des");
    localStorage.setItem("imageLikes", JSON.stringify(this.imageLikes));
  }
}
