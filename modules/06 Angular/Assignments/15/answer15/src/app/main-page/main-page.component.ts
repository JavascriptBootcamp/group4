import { Component, OnInit, ViewChild } from '@angular/core';
import { InstushService } from '../instush.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent  {
  title = 'Instush';

  @ViewChild('middleOfScreen') middleOfScreenElem;
  @ViewChild('innerWrapper') innerWrapperElem;

  
  constructor(private instushService: InstushService) {
    this.instushService.getImagesRelatedDataArr();
    //console.log(this.instushService.imagesRelatedDataArr);

  }


  displayImageOnMiddle(mainPageComponent, i) {
    this.instushService.onMainPageComponentImageClick(mainPageComponent, i);

    // Display image on middle of screen
    this.middleOfScreenElem.nativeElement.style.display = "block";
    this.middleOfScreenElem.nativeElement.style.position = "fixed";
    this.middleOfScreenElem.nativeElement.style.backgroundImage = "url(" + mainPageComponent.instushService.imagesRelatedDataArr[i].imageSource + ")";

    this.innerWrapperElem.nativeElement.style.filter = "blur(3px)";
    this.innerWrapperElem.nativeElement.style.filter = "opacity(20%)";
  }

  undisplayImageOnMiddle() {
    this.middleOfScreenElem.nativeElement.style.display = "none";
    this.innerWrapperElem.nativeElement.style.filter = "none";
  }
}
