import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @ViewChild('firstElem') firstName;
  firstModel: string;
  lastModel: string;

  constructor() {
    this.firstModel = "Shai";
    this.lastModel = "Mesisterano";
  }

  onKeyDown() {
    console.log("this.firstModel onKeyDown",this.firstModel);
  }

  onSubmitForm(f: NgForm) {
    console.log("f", f);
    console.log(this.firstName);
  }
  // fullNameModel: string;
  // constructor() {
  //   this.fullNameModel = "John";
  // }

  // onKeyDown() {
  //   console.log(this.fullNameModel);
  // }

}
