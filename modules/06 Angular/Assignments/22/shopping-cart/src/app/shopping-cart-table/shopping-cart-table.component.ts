import { Component, OnInit, OnChanges } from '@angular/core';
import { ShoppingService, Products } from '../shopping.service';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.css']
})
export class ShoppingCartTableComponent implements OnInit ,OnChanges {

  products: Products[] = [];
  mySelectedProducts: Products[] = [];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.products  = this.shoppingService.getProducts();
    this.mySelectedProducts = this.shoppingService.myProducts;
  }

  addProductToList(addProd: Products) {
     this.shoppingService.addProducts(addProd , this.mySelectedProducts);
  }

  removeProduct(remove: Products) {
    this.shoppingService.removeProduct(remove, this.mySelectedProducts);
  }

  ngOnChanges(){
    this.products  = this.shoppingService.getProducts();
    this.mySelectedProducts = this.shoppingService.myProducts;
  }
}
