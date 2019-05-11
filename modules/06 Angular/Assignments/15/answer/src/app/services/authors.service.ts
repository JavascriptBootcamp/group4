import { Injectable } from '@angular/core';
import { Author } from "../modules/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authors: Author[];

  constructor() {
    this.authors = [
      {
        id: 0,
        name: "Leanne Graham",
        profile_pic: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p240x240/43739948_270843766896996_3882765283009495040_n.jpg?_nc_cat=107&_nc_ht=scontent.fhfa2-2.fna&oh=0084705034aff3ceda891e244ffa17c9&oe=5D700606",
        facebook_URL: "https://www.facebook.com/leanne.graham.5661",
        description: "Engineer, infinitely passionate about photography. 'I love the whole world, and all its craziness.'"
      },
      {
        id: 1,
        name: "Patricia Souza",
        profile_pic: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p240x240/52958242_2189534957798472_979940146277253120_n.jpg?_nc_cat=104&_nc_ht=scontent.fhfa2-2.fna&oh=2a206e335434dc93efac3810a9b97ea0&oe=5D772FB2",
        facebook_URL: "https://www.facebook.com/patricia.souza.98229241?ref=br_rs",
        description: "Landscape | Travel | Life photographer"
      },
      {
        id: 2,
        name: "Marsh Mccall",
        profile_pic: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p240x240/12687921_10153880087004354_2774479584935302443_n.jpg?_nc_cat=106&_nc_ht=scontent.fhfa2-2.fna&oh=0e216487064c251f2c8ba0fab11fbbf4&oe=5D2FD0C9",
        facebook_URL: "https://www.facebook.com/marsh.mccall.9",
        description: "Take a walk in San Diego. Find Something Beautiful in San Diego."
      },
      {
        id: 3,
        name: "ernesto rodrigues",
        profile_pic: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p240x240/55467785_381694156010563_4513899517292052480_n.jpg?_nc_cat=107&_nc_ht=scontent.fhfa2-2.fna&oh=fc4abd38e123c2d4ad0f7ac062773e0b&oe=5D2A0F5F",
        facebook_URL: "https://www.facebook.com/profile.php?id=100025099457535",
        description: "Pacific Northwest Landscape photographer."
      }
    ];
  }

  get_authors(): Author[] {
    return this.authors;
  }

  get_author(id: number): Author {
    let author = this.authors.slice(0).filter(author => author.id===id);
    return author[0];
  }

}
