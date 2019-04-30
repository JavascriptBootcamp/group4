import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shoppingCart.model';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('select') selected;
  @ViewChild('price') priceSelected;

  shoppingCart: Product[];

  constructor(
    private cartService: CartService,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.getItems();
  }

  addItem():void {
    this.cartService.addItem(this.selected.nativeElement.value,this.priceSelected.nativeElement.value);
  }

  getItems():void {
    this.shoppingCart = this.cartService.getItems();
  }
  
  remove(i:number){
    this.cartService.remove(i);
  }


}
