import { Injectable } from '@angular/core';
import { Author } from './modules/Author';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  Authors:Author[];
  constructor() {  this.loadImgs() }

  loadImgs() {
    this.Authors = [
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1553548146-50f0bdf09f0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",profilePicture:'shimi', description: "0"},
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1551300263-00574a9d9b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",profilePicture:'shimi', description:" hjhg0"},
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1551367456-16ac556dfef2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",profilePicture:'shimi', description: "0"},
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1550795598-717619d32900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",profilePicture:'shimi', description: '0'},
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1550639264-38c3059c4620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",profilePicture:'shimi', description: "0"},
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1549945676-4fdf5f18a9fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",profilePicture:'shimi', description: "0"},
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1508662790687-257eefcdccfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",profilePicture:'shimi', description: "0"},
      {ID: Guid.create(),name:"shimi",profileFacebookUrl: "https://images.unsplash.com/photo-1547974497-bb2a93b333ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",profilePicture:'shimi', description: "0"},    ];
     
  }

  getAuthors(): Author[]{
    return this.Authors ;
  }
}
