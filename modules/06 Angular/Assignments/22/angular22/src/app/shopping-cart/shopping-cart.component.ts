import { Component, OnInit ,ViewChild} from '@angular/core'; 
import {ShoppingService} from '../shopping.service';
import {cart} from '../cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('productsName') productsName;
  @ViewChild('price') price;
  totalPrice : number;
  newItem : cart;
  cart : cart[];
  constructor(private shoppingService : ShoppingService) { 
    this.totalPrice = 0;
    this.newItem = null;
  }

  ngOnInit() {
  }
  addProduct(){
    this.newItem = {
      name : this.productsName.nativeElement,
      price : this.price.nativeElement.value
    }
    this.shoppingService.addToCart(this.newItem);
    this.cart = this.shoppingService._getCartArray;
    console.log(this.cart);
  }

}
