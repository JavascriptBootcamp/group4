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
  @Input() indexLike;
  clicked = false;
  imgToZoom: string;
  zoom = false;

  constructor(private imageService:ImagesService) {}

  ngOnInit() {}
  ngOnChanges() {
    //console.log("change");
  }
  onClickLike(e) {
    this.myImg.like++;
    this.imageService.imageLikes[this.indexLike] = this.myImg.like;
    localStorage.setItem("imageLikes", JSON.stringify(this.imageService.imageLikes));

  }

  addBorder() {
    this.zoom = !this.zoom;
    this.clicked = true;
    this.imageService.imageToZoom.emit(this.myImg.src);
  }

  unZoom() {
    this.imageService.zoom = false;
  }
  ngOnDestroy() {

    localStorage.setItem("imageLikes", JSON.stringify(this.imageService.imageLikes));
  }
}
