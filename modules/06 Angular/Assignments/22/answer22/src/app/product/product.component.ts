import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product:Product;
  constructor(private BackEndService: BackEndService ) {
  }
  addOneItem(){
    let amount = this.product.amount;
    if(amount<100){
      this.BackEndService.addToTotalPrice(this.product.priceOfOneProduct);
      if(amount===0){
        this.BackEndService.insertProductToCart(this.product);
      }
      this.product.amount ++;
    }
  }
  removeOneItem(){
    let amount = this.product.amount;
    if(amount>0){
      this.BackEndService.totalPrice-=this.product.priceOfOneProduct;
      if(amount===1){
        this.BackEndService.removeProductFromCart(this.product);
      }
      this.product.amount --;
    }
  }

}
