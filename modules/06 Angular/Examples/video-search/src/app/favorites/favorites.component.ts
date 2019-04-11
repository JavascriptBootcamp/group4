import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() favorites: Movie[];
  isMenuOpen: boolean;
  
  constructor() {
    this.isMenuOpen = false;
   }

  toggleFavorites() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
