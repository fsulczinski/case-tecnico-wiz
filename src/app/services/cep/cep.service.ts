import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CepService {

    constructor(private http: HttpClient) {
    }

    getAdressByCep(cep: string): Observable<any> {
        return this.http.get(`http://viacep.com.br/ws/${cep}/json/`);
    }
}
