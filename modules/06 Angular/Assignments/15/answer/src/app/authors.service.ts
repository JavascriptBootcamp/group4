import { Injectable } from '@angular/core';
// import { Img } from "./modules/img";
import { Author } from "./modules/Author";


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  autohrs: Author[];

  constructor() {
    this.autohrs = [
      { name: "Alis", idAuthor: 0, profile: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", facebook: "https://www.facebook.com/", description: "I am photogragher", images: ["https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"] },
      { name: "David", idAuthor: 1, profile: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", facebook: "https://www.facebook.com/", description: "I am photogragher", images: ["https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80","https://images.unsplash.com/photo-1550795598-717619d32900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"] },
      { name: "Matis", idAuthor: 2, profile: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", facebook: "https://www.facebook.com/", description: "I am photogragher", images: ["https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"] },
      { name: "Kapic", idAuthor: 3, profile: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", facebook: "https://www.facebook.com/", description: "I am photogragher", images: ["https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"] },
      { name: "Lari", idAuthor: 4, profile: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", facebook: "https://www.facebook.com/", description: "I am photogragher", images: ["https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"] },
    ];
  }

  getAuthor(idAuthor:number):Author{
    return this.autohrs[idAuthor];
  }
}
