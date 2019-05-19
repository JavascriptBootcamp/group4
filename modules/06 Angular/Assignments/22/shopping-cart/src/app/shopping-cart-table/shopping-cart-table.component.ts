import { Component, OnInit} from "@angular/core";
import { ShoppingService, Products } from "../shopping.service";

@Component({
  selector: "app-shopping-cart-table",
  templateUrl: "./shopping-cart-table.component.html",
  styleUrls: ["./shopping-cart-table.component.css"]
})
export class ShoppingCartTableComponent implements OnInit{
  nameItem: string;
  priceItem: number;
  products: Products[] = [];
  mySelectedProducts: Products[] = [];
  productsCopy:Products[] = [];
  sum = 0;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.products = this.shoppingService.getProducts();
    this.productsCopy =  this.shoppingService.getProducts().slice();
    this.mySelectedProducts = this.shoppingService.myProducts;
    this.sum = this.shoppingService.sum;

  }

  setPrice(select) {
    let index =  this.products.findIndex((val)=> {
         return val.itemName === select;
    })
    this.priceItem = this.products[index].itemPrice;
  }
  addProductToList(item:Products) {

    this.shoppingService.addProducts(item);
  }

  removeProduct(remove: Products) {
    this.shoppingService.removeProduct(remove);

  }


  ngDoCheck(){

    this.sum = this.shoppingService.sum;

  }
}
