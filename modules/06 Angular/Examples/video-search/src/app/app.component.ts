import { Component } from '@angular/core';
import { Movie } from './movie.model';
import { searchUrl } from './endpoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 1. variables declarations
  endpoint: string;
  movies: Movie[];
  hasMore: boolean;
  page: number;
  search: string;
  isMenuOpen: boolean;

  // 2. default values
  constructor() {
    this.endpoint = searchUrl;
    this.search = "";
    this.initDefaultValues();
    this.isMenuOpen = false;
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

  onAddToFavorites(movie: Movie) {
    console.log("Added to Favorites: " + JSON.stringify(movie));
  }

  toggleFavorites() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
