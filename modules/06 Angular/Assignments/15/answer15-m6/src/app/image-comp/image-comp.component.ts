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
  zoom = false;

  constructor(private imageService:ImagesService) {}

  ngOnInit() {}
  ngOnChanges() {
    //console.log("change");
  }
  onClickLike(e) {
    this.myImg.like++;
  }

  addBorder() {
    this.zoom = !this.zoom;
    this.clicked = true;
    this.imageService.imageToZoom.emit({img:this.myImg.src,zoom:this.zoom});
  }

  unZoom() {
    this.imageService.zoom = false;
  }
  ngOnDestroy() {
    localStorage.setItem("imageLikes", JSON.stringify(this.imageLikes));
  }
}
