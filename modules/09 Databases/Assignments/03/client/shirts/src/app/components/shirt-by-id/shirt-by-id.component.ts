import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shirt-by-id',
  templateUrl: './shirt-by-id.component.html',
  styleUrls: ['./shirt-by-id.component.css']
})
export class ShirtByIdComponent implements OnInit {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
   }

  ngOnInit() {}


  async onSubmitForm(f: NgForm) {
    const id = f.value.shirtId;
    const res = await fetch('http://localhost:5000/shirtDetailsById?id=' + id);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);

  }

}
