import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-less-expensive-shirt',
  templateUrl: './less-expensive-shirt.component.html',
  styleUrls: ['./less-expensive-shirt.component.css']
})
export class LessExpensiveShirtComponent implements OnInit {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }

  ngOnInit() {}


  async onSubmitForm(form: NgForm) {
    const id1 = form.value.id1;
    const id2 = form.value.id2;

    let res = await fetch('http://localhost:5000/lessExpensiveShirt?id1='+id1+'&id2='+id2);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);
  }

}
