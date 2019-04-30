import { Component, ViewChild } from '@angular/core';
import { Movie } from '../movie.model';
import { searchUrl } from '../endpoint';
import { MovieService } from '../movie.service';
import { LoggerService } from '../logger.service';
import { logTypes } from '../logTypes.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  // providers: [LoggerService]
})
export class MoviesComponent {
  @ViewChild('query') myQuery;

  // 1. variables declarations
  endpoint: string;
  movies: Movie[];
  hasMore: boolean;
  page: number;
  search: string;
  favorites: Movie[];

  // 2. default values
  constructor(
    private loggerService:LoggerService,
    private movieService: MovieService
  ) {
    this.endpoint = searchUrl;
    this.search = "";
    this.initDefaultValues();
    this.favorites = [];
    // this.loggerService.setLogType(logTypes.INFO);
  }

  // 3. logic

  initDefaultValues(){
    this.loggerService.log("Initiating default value");
    this.movies = [];
    this.page = 1;
    this.hasMore = false;
  }

  searchMovie(e: Event, input: HTMLInputElement) {
    this.loggerService.log('myQuery ' +  this.myQuery.nativeElement.value);
    this.loggerService.log('Searching movie: event ' + JSON.stringify(e) + ' input' + JSON.stringify(input));
    e.preventDefault();
    this.initDefaultValues();
    this.search = input.value;
    this.loadMovies();
  }

  loadMovies() {
    // const url = `${this.endpoint}&page=${this.page}&s=${this.search}`;
    // this.loggerService.log(`fetching movies from url: ${url}`);
    // fetch(url)
    // .then( response => response.json() )
    this.movieService.loadMovies(this.page, this.search)
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

  // onFavoritesChange(movie: Movie) {
    // if (this.favorites.includes(movie)){
    //   const movieIndex = this.favorites.indexOf(movie);
    //   this.favorites.splice(movieIndex, 1);
    // }
    // else {
    //   this.favorites.push(movie);
    // }
  // }

}
