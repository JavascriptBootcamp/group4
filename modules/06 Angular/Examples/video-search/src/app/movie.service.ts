import { Injectable } from '@angular/core';
import { rootUrl } from './endpoint';
import { LoggerService } from './logger.service';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  endpoint: string;
  constructor(
    private loggerService:LoggerService
  ) {
    this.endpoint = rootUrl;
   }

  loadMovie(id: string): Promise<Movie> {
    const url = `${this.endpoint}&i=${id}`;
    this.loggerService.log(`fetching movie from url: ${url}`);
    return fetch(url).then(response => response.json())
  }

  loadMovies(page: number, search: string): Promise<any> {
    const url = `${this.endpoint}&page=${page}&s=${search}`;
    this.loggerService.log(`fetching movies from url: ${url}`);
    return fetch(url)
    .then( response => response.json() )
  }
}
