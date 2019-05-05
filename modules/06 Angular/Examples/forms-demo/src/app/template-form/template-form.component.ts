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
  
  onSubmitForm(f: NgForm) {
    console.log("f", f);
    console.log("firstName", this.firstName);
  }

  onKeyDown() {
    console.log("this.firstModel onKeyDown",this.firstModel);
  }

}
