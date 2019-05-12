import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActionsService} from '../actions.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  _item:object;
  constructor(private actionsService: ActionsService) { 
    this._item = {};
  }

  ngOnInit() {
  }

  addItem(item:NgForm) {

    this._item = {"name" : item.controls.item.value,"price" : item.controls.price.value};
    this.actionsService.createItemsList(this._item);

  }

}
