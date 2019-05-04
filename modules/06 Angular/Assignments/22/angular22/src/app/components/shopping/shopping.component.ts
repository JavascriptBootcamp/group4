import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  
  constructor(public shoppingService: ShoppingService) {}

  ngOnInit() {
  }

  addClick(name: string, price: string): void {
    this.shoppingService.addProduct(name, price);
  }
  removeClick(index: number): void {
    this.shoppingService.removeProduct(index);
  }
}
