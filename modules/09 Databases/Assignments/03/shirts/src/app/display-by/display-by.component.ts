import { Component, OnInit } from '@angular/core';
import {ShirtsService} from '../shirts.service';

interface IdisplayObj{displayValue:string,displayData:any}

@Component({
  selector: 'app-display-by',
  templateUrl: './display-by.component.html',
  styleUrls: ['./display-by.component.css']
})
export class DisplayByComponent implements OnInit {

  selectedValue:string;
  data:any;
  displayObj:IdisplayObj;
  constructor(private shirtsService:ShirtsService) { 
    this.selectedValue = null;
    this.data = null;
    this.displayObj = {
      displayValue : "",
      displayData : []
    }
  }

  ngOnInit() {
  }


  onDisplaySelected(event){

    this.selectedValue = event.target.value;
  }


  async onSubmit(e,firstDetail,secondDetail){
    e.preventDefault();
    switch(this.selectedValue){

    case "0": this.data = await this.shirtsService.getShirtById(firstDetail);break;
    case "1": this.data = await this.shirtsService.getShirtsByPriceRange(firstDetail,secondDetail);break;
    case "2": this.data = await this.shirtsService.getShirtsColorsBySize(firstDetail);break;
    case "3": this.data = await this.shirtsService.getSizesAndColorsByFit(firstDetail);break;
    case "4": this.data = await this.shirtsService.getTheLessExpensiveShirt(firstDetail,secondDetail);break;
    default : break;
    }

    console.log(this.data); 
    
    this.displayObj["displayValue"] = this.selectedValue;
    this.displayObj["displayData"] = this.data;
  }

}
