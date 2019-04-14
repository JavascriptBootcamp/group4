import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    profileForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  
}
