import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  formGroup: FormGroup;
  constructor(builder: FormBuilder) {
    this.formGroup = builder.group({
      fullname: [
        "Shai", [
          Validators.required
        ]
      ]
    })
  }

}
