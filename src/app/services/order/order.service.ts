import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) {
    }

    postOrder(order) {
        console.log(order);
        return this.http.post(`http://localhost/reserva`, order, {
            headers: {
                Authorization: 'Bearer #ASDFGW#ERWQERTRYT#%$%$@#$%=='
            }
        }).subscribe(r => console.log(r));
    }
}
