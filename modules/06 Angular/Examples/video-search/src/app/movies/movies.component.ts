import { Component } from '@angular/core';
import { Movie } from '../movie.model';
import { searchUrl } from '../endpoint';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  // 1. variables declarations
  endpoint: string;
  movies: Movie[];
  hasMore: boolean;
  page: number;
  search: string;
  favorites: Movie[];

  // 2. default values
  constructor() {
    this.endpoint = searchUrl;
    this.search = "";
    this.initDefaultValues();
    this.favorites = [];
  }

  // 3. logic

  initDefaultValues(){
    this.movies = [];
    this.page = 1;
    this.hasMore = false;
  }

  searchMovie(e: Event, input: HTMLInputElement) {
    e.preventDefault();
    this.initDefaultValues();
    this.search = input.value;
    this.loadMovies();
  }

  loadMovies() {
    fetch(`${this.endpoint}&page=${this.page}&s=${this.search}`)
    .then( response => response.json() )
    .then( data => data.Search ? this.setMovies(data.Search) : this.disableLoadMore() );
  }

  setMovies(movies: Movie[]) {
    this.movies = this.movies.concat(movies);
    this.page++;
    this.hasMore = true;
  }

  disableLoadMore() {
    this.hasMore = false;
  }

  onFavoritesChange(movie: Movie) {
    if (this.favorites.includes(movie)){
      const movieIndex = this.favorites.indexOf(movie);
      this.favorites.splice(movieIndex, 1);
    }
    else {
      this.favorites.push(movie);
    }
  }

}
