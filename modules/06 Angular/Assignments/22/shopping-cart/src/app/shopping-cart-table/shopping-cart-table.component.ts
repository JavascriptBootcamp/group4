import { Component, OnInit, OnChanges } from "@angular/core";
import { ShoppingService, Products } from "../shopping.service";

@Component({
  selector: "app-shopping-cart-table",
  templateUrl: "./shopping-cart-table.component.html",
  styleUrls: ["./shopping-cart-table.component.css"]
})
export class ShoppingCartTableComponent implements OnInit, OnChanges {
  nameItem: string;
  priceItem: number;
  products: Products[] = [];
  mySelectedProducts: Products[] = [];
  productsCopy:Products[] = [];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.products = this.shoppingService.getProducts();
    //this.productsCopy =  this.shoppingService.getProducts().slice();
    //this.mySelectedProducts = this.shoppingService.myProducts;

  }

  setPrice(select) {
    let index =  this.products.findIndex((val)=> {
         return val.itemName === select;
    })
    this.priceItem = this.products[index].itemPrice;
  }
  addProductToList(item:Products) {
    console.log(item);
    this.mySelectedProducts.push(item);
    //this.shoppingService.addProducts(item, this.mySelectedProducts);
  }

  removeProduct(remove: Products) {
    const index = this.mySelectedProducts.findIndex((val) => {
      return  val.itemName === remove.itemName;
     });
    if (index > -1) {
      this.mySelectedProducts.splice(index, 1);
    }
  }

  ngOnChanges() {
   // this.products = this.shoppingService.getProducts();
    //this.mySelectedProducts = this.shoppingService.myProducts;
  }
}
