import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.css']
})
export class ShoppingCartTableComponent implements OnInit {

  products: string[] = [];
  constructor() { }

  ngOnInit() {

    this.products = ['apple',
    'candy', 'water', 'carrot', 'umbrella' , 'proteinShake', 'bread', 'shlizel', 'shkolad', 'milk' ];
  }

}
