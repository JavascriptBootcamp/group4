import { Component, OnInit, ViewChild } from '@angular/core';
import { InstushService } from '../instush.service';

@Component({
  selector: 'app-author-images',
  templateUrl: './author-images.component.html',
  styleUrls: ['./author-images.component.css']
})

export class AuthorImagesComponent implements OnInit {
  title = 'Instush';

  @ViewChild('middleOfScreen') middleOfScreenElem;
  @ViewChild('innerWrapper') innerWrapperElem;

  authorName: string;

  constructor(private instushService: InstushService) {
    this.instushService.getAuthorImagesRelatedDataArr(instushService.clickedAuthorName);
    // console.log( this.instushService.authorImagesRelatedDataArr);

    this.authorName = this.instushService.clickedAuthorName;

    this.instushService.getAuthorsDataArr();
    // console.log(this.instushService.getAuthorsDataArr());
  }

  ngOnInit() {}


  displayImageOnMiddle(autorImagesComponent, i) {
    this.instushService.onAuthorImagesComponentImageClick(autorImagesComponent, i);

    // Display image on middle of screen
    this.middleOfScreenElem.nativeElement.style.display = "block";
    this.middleOfScreenElem.nativeElement.style.position = "fixed";
    this.middleOfScreenElem.nativeElement.style.backgroundImage = 'url(' + autorImagesComponent.instushService.authorImagesRelatedDataArr[i].imageSource + ')';

    this.innerWrapperElem.nativeElement.style.filter = 'blur(3px)';
    this.innerWrapperElem.nativeElement.style.filter = 'opacity(20%)';
  }

  undisplayImageOnMiddle() {
    this.middleOfScreenElem.nativeElement.style.display = 'none';
    this.innerWrapperElem.nativeElement.style.filter = 'none';
  }


}
