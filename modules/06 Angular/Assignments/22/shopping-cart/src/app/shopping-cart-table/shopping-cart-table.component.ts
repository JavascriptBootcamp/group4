import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.css']
})
export class ShoppingCartTableComponent implements OnInit {

  products: string[] = [];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {

    this.products  = this.shoppingService.getProducts();
  }

}
