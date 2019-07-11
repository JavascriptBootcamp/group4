import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shirts-by-price-range',
  templateUrl: './shirts-by-price-range.component.html',
  styleUrls: ['./shirts-by-price-range.component.css']
})
export class ShirtsByPriceRangeComponent implements OnInit {
  resultMessage: string;

  constructor() { 
    this.resultMessage = null;
  }

  ngOnInit() {
  }


  async onSubmitPriceRangeForm(priceRangeForm: NgForm) {
    const startPrice = priceRangeForm.value.startPrice;
    const endPrice = priceRangeForm.value.endPrice;

    let res = await fetch('http://localhost:5000/shirtsDetailsByPriceRange?fromPrice='+startPrice+'&toPrice='+endPrice);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);
  }

}
