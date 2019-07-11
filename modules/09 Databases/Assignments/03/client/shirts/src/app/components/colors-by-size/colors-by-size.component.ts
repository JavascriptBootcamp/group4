import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-colors-by-size',
  templateUrl: './colors-by-size.component.html',
  styleUrls: ['./colors-by-size.component.css']
})
export class ColorsBySizeComponent implements OnInit {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }

  ngOnInit() {}


  async onSubmitForm(f: NgForm) {
    const shirtSize = f.value.size;

    let res = await fetch('http://localhost:5000/shirtsColorsBySize?size='+shirtSize);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);
  }

}
