import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MOVIEDB_IMAGE_BASE_URL } from '../../moviedb-config';
import { Router } from '@angular/router';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

    posterBaseUrl = MOVIEDB_IMAGE_BASE_URL;
    movies: any;

    constructor(private movieService: MovieService, private router: Router) {
    }

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.movieService.getMoviesList().subscribe(r => this.movies = r.results);
    }

    navTicketCheckout(movie: any) {
        this.router.navigateByUrl('/ticket-checkout', {
            state: { movie }
        });
    }
}
