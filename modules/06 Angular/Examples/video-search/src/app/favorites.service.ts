import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: Movie[];

  constructor() {
    this.favorites = [];
  }

  toggleFavorite(movie: Movie) {
    if (this.favorites.includes(movie)){
      const movieIndex = this.favorites.indexOf(movie);
      this.favorites.splice(movieIndex, 1);
    }
    else {
      this.favorites.push(movie);
    }
  }

  get _favorites(): Movie[] {
    return this.favorites;
  }
}
