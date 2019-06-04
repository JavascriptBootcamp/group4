import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  message:string;
  constructor(private chatService:ChatService) {

    this.message = null;
   }

   
  onSubmit(e,searchInput){
   
    e.preventDefault();
    const value = searchInput.value;
    this.message = this.validateSearchInput(value)?"the search term has to be at least 3 characters long":null;
  
     this.chatService.onSearchClicked.emit({searchValue:value,searchClicked:!this.validateSearchInput(value)});
    
  } 


  validateSearchInput(value){
    return value.length<3;
 } 

  ngOnInit() {
  }

}
