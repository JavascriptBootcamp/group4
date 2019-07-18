import { Component, ViewChild } from '@angular/core';
import { ClothesService } from './clothes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clothes';
  data;
  addShirtMessage: string;

  @ViewChild("input1") input1;
  @ViewChild("input2") input2;
  @ViewChild("input3") input3;
  @ViewChild("input4") input4;

  constructor(private clothesService: ClothesService){
    this.data = [];
    this.addShirtMessage = '';
  }

  async onSubmit(e,f,action){
    e.preventDefault();
    this.addShirtMessage = '';
    const inputs = [this.input1,this.input2,this.input3,this.input4];
    const res = await this.clothesService.serverCall(action,inputs);
    const data = await res.text();
    if(action === 'addShirt'){
      this.addShirtMessage = data;
      return;
    }
    this.data = JSON.parse(data);
  }
  setAction(action){
    this.addShirtMessage = '';
  }
}

