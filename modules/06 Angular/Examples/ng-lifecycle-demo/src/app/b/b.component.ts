import { Component, ViewChild, ElementRef, Input, ContentChild } from '@angular/core';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  @Input() data: string;
  @ViewChild('BStatement') BStatement: ElementRef;
  @ContentChild(CComponent) cRef: CComponent;

  // ngOnChanges() {
  //   console.log("ngOnChanges")
  //   this.BStatement.nativeElement.style.background = 'red';
  // }

  constructor() {
    // console.log("constructor");
    // this.BStatement.nativeElement.style.background = 'red';
  }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  //   this.BStatement.nativeElement.style.background = 'red';
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }

  changeB() {
    this.BStatement.nativeElement.innerText = "Moshiko is the king";
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

}
