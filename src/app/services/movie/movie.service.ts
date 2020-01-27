import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MOVIEDB_TOKEN } from '../../moviedb-config';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) {
    }

    getMoviesList(): Observable<any> {
        return this.http.get(`https://api.themoviedb.org/3/movie/upcoming/?api_key=${MOVIEDB_TOKEN}`, {
            params: { api_key: MOVIEDB_TOKEN, language: 'pt-BR' }
        });
    }
}
