import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('content') myContent;
  checkValue() {
    console.log(this.myContent.nativeElement.value)
  }

}
