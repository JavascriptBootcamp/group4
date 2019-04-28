import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  // @Input() favorites: Movie[];
  favorites: Movie[];
  isMenuOpen: boolean;
  
  constructor(
    private favoritesService:FavoritesService
  ) {
    this.isMenuOpen = false;
    this.favorites = [];
   }

   ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
   }

  toggleFavorites() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
