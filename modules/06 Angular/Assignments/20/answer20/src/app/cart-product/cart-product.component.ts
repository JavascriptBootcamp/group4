import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent{
  @Input() car:Product;
  constructor(private BackEndService: BackEndService) {
  }
  addOneItem(){
    let amount = this.car.amount;
    if(amount<100){
      this.BackEndService.addToTotalPrice(this.car.priceOfOneProduct);
      if(amount===0){
        this.BackEndService.insertProductToCart(this.car);
      }
      this.car.amount ++;
    }
  }
  removeOneItem(){
    let amount = this.car.amount;
    if(amount>0){
      this.BackEndService.totalPrice-=this.car.priceOfOneProduct;
      if(amount===1){
        this.BackEndService.removeProductFromCart(this.car);
      }
      this.car.amount --;
    }
  }

}
